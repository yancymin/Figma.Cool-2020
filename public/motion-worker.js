const element = (name, options) =>
  Object.assign(document.createElement(name), options);

const frame = () => new Promise(resolve => requestAnimationFrame(resolve));

const fillerSize = 100;
const filler = "\u28ff".repeat(fillerSize) + "\n\u28ff".repeat(fillerSize - 1);

const root = element("div", { className: "braille" });
const hidden = element("div", { className: "hidden", textContent: filler });
const visible = element("canvas", { className: "visible" });
visible.width = "4000";
visible.height = "1000";
const ctx = visible.getContext("2d");
ctx.font = "12px Iosevka Web";
ctx.fillStyle = '#5d6398';

root.appendChild(hidden);
root.appendChild(visible);
document.body.appendChild(root);

const hr = hidden.getBoundingClientRect();
const fontWidth = hr.width / fillerSize;
const fontHeight = hr.height / fillerSize;

const rr = root.getBoundingClientRect();
const ratio = 2.5;
const width = 1600;
const height = 600;

console.log(rr.width, fontWidth, width, height);

const worker = new Worker("/motion.js");

(async () => {
  for (; ; await frame()) {
    worker.postMessage([width, height, ratio]);
  }
})();

worker.onmessage = e => {
  const dots = e.data;
  ctx.clearRect(0, 0, visible.width, visible.height);
  dots.forEach((dot, index) => {
    ctx.fillText(dot, 0, 12 * (index + 4));
  });
};
