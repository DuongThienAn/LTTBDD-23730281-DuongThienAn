
interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

async function getUser(id: number): Promise<void> {
  const user = await fetchUser(id);
  console.log(user);
}

getUser(1);
