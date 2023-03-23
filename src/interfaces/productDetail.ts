import { IReview } from "./review";

export interface IProductDetail {
  id: number;
  brand: string;
  name: string;
  kcal: number;
  originPath: string;
  localPath: string;
  avg_grade?: number;
  reviews: IReview[];
}
