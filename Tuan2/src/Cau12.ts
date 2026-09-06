
function simulateTask5(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

async function runTask(): Promise<void> {
  const result = await simulateTask5(2000);
  console.log(result);
}

runTask();
