const addUser = (newUser) => {
  return fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
};

export default addUser;
