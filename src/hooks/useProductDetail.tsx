import { useQuery } from "react-query";
import { getProductDetail } from "../apis/api/productDetailApi";
import { IProductDetail } from "../interfaces/productDetail";

function useProductDetail(id: number) {
  const { data } = useQuery(
    ["product", Number(id)],
    () => getProductDetail(Number(id)),
    {
      staleTime: 30000,
    }
  );
  return data?.data;
}
export default useProductDetail;
