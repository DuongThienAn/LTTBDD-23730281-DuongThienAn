
const helloAsync = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
};

async function helloAsyncAwait(): Promise<void> {
  const msg = await helloAsync();
  console.log(msg);
}

helloAsyncAwait();
