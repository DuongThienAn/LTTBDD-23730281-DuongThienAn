
interface User {
  id: number;
  name: string;
}

function fetchUser1(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  return Promise.all(ids.map((id) => fetchUser1(id)));
}

fetchUsers([1, 2, 3]).then((users) => console.log(users));
