const todos = {
  userID: 1001,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(todos),
}).then((res) => console.log(res));
