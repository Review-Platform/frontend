import axios from "axios";
import { baseApi } from "../utils/instance";

// export const getProduct = () => baseApi(`/products`);

const PRODUCT_URI = "products";

// export async function getProduct() {
//   return await axios("http://localhost:8080/products").then((res) => res.data);
// }

export const getProduct = async () => {
  const { data } = await baseApi.get(PRODUCT_URI);
  return data;
};
