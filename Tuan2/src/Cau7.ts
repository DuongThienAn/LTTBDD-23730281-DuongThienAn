function simulateTask4(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}
const fast = simulateTask4(500);
const slow = simulateTask4(3000);
 
Promise.race([fast, slow]).then((result) => {
  console.log("First finished:", result);
});
