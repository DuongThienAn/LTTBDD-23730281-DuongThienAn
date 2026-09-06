function simulateTask2(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

const task1 = simulateTask2(1000);
const task2 = simulateTask2(2000);
const task3 = simulateTask2(1500);

Promise.all([task1, task2, task3]).then((results) => {
  console.log(results);
});