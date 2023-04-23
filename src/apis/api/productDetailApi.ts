import { baseApi } from "../utils/instance";

const PRODUCT_DETAIL_URI = "products/details";

export const getProductDetail = (id: number) =>
  baseApi(`${PRODUCT_DETAIL_URI}/${id}`).then((res) => res.data);
