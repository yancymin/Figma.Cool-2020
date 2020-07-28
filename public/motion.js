const enc = x => ((x & 0x08) << 3) | ((x & 0x70) >> 1) | (x & 0x87) | 0x2800;
const row = x => String.fromCharCode(...Array.from(x, enc));

const create = (width, height) =>
  Array.from(Array(height >> 2), () => new Uint8Array(width >> 1));

const set = (table, x, y) =>
  (table[y >> 2][x >> 1] |= 1 << ((y & 3) | ((x & 1) << 2)));

const render = table => table.map(row).join("\n");

// util

const frame = () => new Promise(resolve => requestAnimationFrame(resolve));

const element = (name, options) =>
  Object.assign(document.createElement(name), options);

// bayer

const bayer = (order, x, y) => {
  let z = 0;
  for (let i = order; i--; x >>= 1, y >>= 1)
    z = ((((x & 1) ^ (y & 1)) | (z << 1)) << 1) | (y & 1);
  return z;
};

const lut = order => {
  const size = 1 << order,
    area = size * size;
  const lut = new Float32Array(area);
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++)
      lut[x + y * size] = (bayer(order, x, y) + 0.5) / area;
  return (x, y) => lut[(x % size) + (y % size) * size];
};

// render

const simplex = new SimplexNoise();
const bayer4 = lut(4);

const fbm = (freq, amp, x, y, z) =>
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2) +
  simplex.noise3D(x * (freq *= 2), y * freq, z * freq) * (amp /= 2);

const texture = (u, v, w) => (2 * (0.5 + 0.5 * fbm(0.5, 1, u, v, w))) % 1;

const globe = (x, y, u, v, w) => {
  const d = u * u + v * v;
  if (d > 1) return false;

  const f = 1 / ((1 - d ** 0.5) ** 0.5 + 1);
  const t = texture(1e-1 * w + f * u, f * v, 1e-2 * w);
  return t > bayer4(x, y);
};

// main

const main = async () => {
  const fillerSize = 100;
  const filler =
    "\u28ff".repeat(fillerSize) + "\n\u28ff".repeat(fillerSize - 1);

  const root = element("div", { className: "braille" });
  const hidden = element("div", { className: "hidden", textContent: filler });
  const visible = element("div", { className: "visible" });

  root.appendChild(hidden);
  root.appendChild(visible);
  document.body.appendChild(root);

  for (; ; await frame()) {
    const hr = hidden.getBoundingClientRect();
    const fontWidth = hr.width / fillerSize;
    const fontHeight = hr.height / fillerSize;

    const rr = root.getBoundingClientRect();
    const ratio = rr.width / rr.height;
    const width = (rr.width / fontWidth) << 1;
    const height = (rr.height / fontHeight) << 2;

    const pixels = create(width, height);
    const time = 1e-3 * Date.now();

    for (let y = 0; y < height; y++) {
      const v = (2 * y) / height - 1;
      for (let x = 0; x < width; x++) {
        const u = ratio * ((2 * x) / width - 1);
        if (globe(x, y, u, v, time)) set(pixels, x, y);
      }
    }

    visible.textContent = render(pixels);
  }
};

main();
