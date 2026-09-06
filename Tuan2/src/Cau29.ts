function simulateTask7(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

async function queueProcess(): Promise<void> {
  const times = [1000, 500, 1500, 800, 1200];
  for (const time of times) {
    const result = await simulateTask7(time);
    console.log(result);
  }
}

queueProcess();
