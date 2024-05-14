const textdecoder = new TextDecoder();

const featureWorker = new Worker(
  import.meta.resolve("./test.worker.ts"),
  {
    type: "module",
  },
);

featureWorker.onmessage = (e) => {
  const featureArrayStr = textdecoder.decode(e.data);
  console.log(JSON.parse(featureArrayStr));
};

featureWorker.postMessage({
  a: 6,
  b: 2,
});
