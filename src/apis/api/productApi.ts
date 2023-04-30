import { baseApi } from "../utils/instance";

const PRODUCT_URI = "products";

export const getProduct = async () => {
  const { data } = await baseApi.get(PRODUCT_URI);
  return data;
};
