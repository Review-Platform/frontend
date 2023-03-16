export enum Tags {
  "영화" = 0,
  "안주",
  "인기",
  "가족",
  "파티",
  "일상",
  "오리지날",
  "다이어트",
}

interface IReviewImages {
  id: number;
  storedName: string;
}
export interface IReview {
  content: string;
  flavor: number[];
  grade: number;
  product: {
    name: string;
    avgGrade: number;
  };
  regTime: string;
  reviewId: number;
  reviewImages: IReviewImages[];
  tagNames: string[];
  user: {
    userId: string;
    userName: string;
  };
}
