
function failTask(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

async function runFailTask(): Promise<void> {
  try {
    await failTask();
  } catch (err) {
    console.error("Caught error:", (err as Error).message);
  }
}

runFailTask();
