Promise.resolve(2)
  .then((num) => num * num) // square
  .then((num) => num * 2) // double
  .then((num) => num + 5) // add 5
  .then((result) => console.log("Result:", result)); // 13
