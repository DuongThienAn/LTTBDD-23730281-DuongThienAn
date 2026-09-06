function failTask(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Something went wrong")), 1000);
    });
  }
   
  failTask().catch((err) => console.error(err.message));
  