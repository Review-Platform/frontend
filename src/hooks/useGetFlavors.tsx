import { stringify } from "querystring";
import { IFlavorArr } from "../interfaces/flavorArr";

function useGetFlavors(flavorString: string) {
  function getLevel(level: number) {
    if (level === 1) {
      return "약함";
    }
    if (level === 2) {
      return "중간";
    }
    if (level === 3) {
      return "강함";
    }
  }
  const flavorArr: IFlavorArr[] = [
    { flavor: "짠맛", level: getLevel(Number(flavorString[38])) },
    { flavor: "매운맛", level: getLevel(Number(flavorString[19])) },
    { flavor: "단맛", level: getLevel(Number(flavorString[29])) },
    { flavor: "신맛", level: getLevel(Number(flavorString[9])) },
  ];
  return flavorArr;
}
export default useGetFlavors;
