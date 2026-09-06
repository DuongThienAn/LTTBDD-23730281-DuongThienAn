interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function getIncompleteTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos.filter((todo) => !todo.completed);
}

getIncompleteTodos().then((todos) => console.log(todos));
