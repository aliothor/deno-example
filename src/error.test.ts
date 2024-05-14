class ErrorA extends Error {
  name = "ErrorA";
}

function getStr() {
  throw new ErrorA("getstr error");
}

try {
  const res = getStr();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.name);
    console.log(error.message);
  }
}
