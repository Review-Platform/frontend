import { useState } from "react";

function useSortOrder(setPage: React.Dispatch<React.SetStateAction<number>>) {
  const [isTimeOrder, setIsTimeOrder] = useState(true); //최신순, 추천순 설정
  const handleTimeOrder = () => {
    setIsTimeOrder(true);
    setPage(1);
  }; //최신순으로
  const handleLikeOrder = () => {
    setIsTimeOrder(false);
    setPage(1);
  }; //추천순으로

  return { isTimeOrder, handleTimeOrder, handleLikeOrder };
}
export default useSortOrder;
