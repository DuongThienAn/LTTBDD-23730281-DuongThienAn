function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitFiveSeconds(): Promise<void> {
  console.log("Waiting...");
  await wait(5000);
  console.log("5 seconds passed");
}

waitFiveSeconds();
