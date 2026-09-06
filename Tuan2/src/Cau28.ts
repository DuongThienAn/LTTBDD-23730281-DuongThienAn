function simulateTask6(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

async function batchProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map((n) => simulateTask6(n * 500));
  const results = await Promise.all(tasks);
  console.log(results);
}

batchProcess();
