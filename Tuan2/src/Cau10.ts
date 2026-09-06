
function simulateTask3(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Task done"), time);
    });
  }
  
  simulateTask3(1000)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log("Done"));
  