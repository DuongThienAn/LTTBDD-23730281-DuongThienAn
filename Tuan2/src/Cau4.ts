function getRandomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
      const num = Math.random();
      if (num > 0.1) resolve(num);
      else reject(new Error("Number too small"));
    });
  }
  getRandomNumber()
  .then((num) => console.log("Random number:", num))
  .catch((err) => console.error(err.message));
