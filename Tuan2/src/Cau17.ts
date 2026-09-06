
async function triple4(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

async function iteratePromises(): Promise<void> {
  const promises = [triple4(1), triple4(2), triple4(3)];

  for await (const value of promises) {
    console.log(value);
  }
}

iteratePromises();
