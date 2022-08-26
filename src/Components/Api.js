import axios from "axios";

export const GetLoginData = (number) => {
  return axios.get(
    `https://harshal-json-mock-server.herokuapp.com/users?number=${number}`
  );
};

export const PostLoginData = async ({ name, email, number, password }) => {
  let data = await fetch(
    "https://harshal-json-mock-server.herokuapp.com/users",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  data = await data.json();
  console.log(data);
};

export const GetCatData = () => {
  return axios.get("https://harshal-json-mock-server.herokuapp.com/category");

  // fetch("https://harshal-json-mock-server.herokuapp.com/category").then(
  //   (res) => {
  //     return res.json();
  //   }
  // );
};
