
async function getMultipleTodos(ids: number[]): Promise<void> {
  for (const id of ids) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await res.json();
    console.log(data);
  }
}

getMultipleTodos([1, 2, 3]);
