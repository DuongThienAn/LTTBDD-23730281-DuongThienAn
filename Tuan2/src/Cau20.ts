interface User {
  id: number;
  name: string;
}

function fetchUser2(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), ms);
  });
}

async function fetchWithTimeout<T>(
  promise: Promise<T>,
  ms: number
): Promise<T> {
  return Promise.race([promise, timeout(ms)]);
}

fetchWithTimeout(fetchUser2(1), 2000)
  .then((user) => console.log(user))
  .catch((err) => console.error(err.message));
