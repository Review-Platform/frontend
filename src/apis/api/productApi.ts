import axios from "axios";
import { baseApi } from "../utils/instance";

// export const getProduct = () => baseApi(`/products`);

export async function getProduct() {
  return await axios("http://localhost:8080/products").then(
    (res) => res.data.content
  );
}
