export interface IRecordProduct {
  name: string;
  images: string;
  hashtags: string[] | null;
  productId: number;
}
export interface ITopReviewProduct {
  id: number;
  name: string;
  kcal: null;
  avgGrade: number;
  originPath: string;
  localPath: string;
  brand: string;
}
export interface ITopReview {
  reviewLikeCount: 2;
  product: ITopReviewProduct;
}

export interface IRankingProduct {
  snackName: string;
  grade: number;
}
