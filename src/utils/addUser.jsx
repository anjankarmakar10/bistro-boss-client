const addUser = (newUser) => {
  return fetch("https://bistro-boss-server-anjankarmakar.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
};

export default addUser;
