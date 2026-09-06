
async function triple2(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

async function runSequentially(): Promise<void> {
  const a = await triple2(2);
  const b = await triple2(3);
  const c = await triple2(4);
  console.log(a, b, c);
}

runSequentially();
