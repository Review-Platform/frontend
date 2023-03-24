import axios from "axios";
import { useQuery } from "react-query";
import { IProductInfo } from "../../interfaces/productInfo";
import { baseApi } from "../utils/instance";

// export const getProduct = () => baseApi(`/products`);

const PRODUCT_URI = "products";

export const getProduct = async () => {
  const { data } = await baseApi.get(PRODUCT_URI);
  return data;
};
