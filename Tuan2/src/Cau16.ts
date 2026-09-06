
async function triple3(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

async function runParallel(): Promise<void> {
  const [a, b, c] = await Promise.all([triple3(2), triple3(3), triple3(4)]);
  console.log(a, b, c);
}

runParallel();
