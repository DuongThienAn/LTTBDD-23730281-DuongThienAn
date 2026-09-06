
async function triple(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

triple(5).then((res) => console.log(res)); // 15
