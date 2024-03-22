import axios from "axios";

export const GetLoginData = (email, password, number) => {
  return axios.get(
    `https://jsonmockserver.cyclic.app/user?number=${number}&email=${email}&password=${password}`
  );
};

export const PostLoginData = async ({ name, email, number, password }) => {
  await fetch(
    "https://jsonmockserver.cyclic.app/user",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const GetCatData = () => {
  return axios.get(
    "https://jsonmockserver.cyclic.app/nbFruits&Veg"
  );
};

export const GetWholeData = (setData) => {
  axios
    .get("https://jsonmockserver.cyclic.app/nbFruits&Veg")
    .then((res) => res.json());
};

export const GetCartData = (setData) => {
  axios
    .get("https://jsonmockserver.cyclic.app/nbCart")
    .then((res) => setData(res.data));
};

export const CartDataAdd = (data) => {
  axios({
    url: `https://jsonmockserver.cyclic.app/nbCart`,
    method: "POST",
    data: data,
  });
};

export const CartItemDelete = (id) => {
  axios({
    url: `https://jsonmockserver.cyclic.app/nbCart/${id}`,
    method: "DELETE",
  });
};

export const CountIncDec = (id, no, qty, price, aPrice) => {
  axios({
    url: `https://jsonmockserver.cyclic.app/nbCart/${id}`,
    method: "PATCH",
    data: { qty: Number(qty) + no, price: Number(price) + Number(aPrice) * no },
  });
};
