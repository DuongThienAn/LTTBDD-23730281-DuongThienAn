async function checkAllTodos(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://example.com/todos/1",
  ];

  const results = await Promise.allSettled(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`URL ${index + 1} success:`, result.value);
    } else {
      console.log(`URL ${index + 1} failed:`, result.reason);
    }
  });
}

checkAllTodos();
