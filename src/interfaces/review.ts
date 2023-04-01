interface IReviewImages {
  id: number;
  storedName: string;
}
export interface IReview {
  content: string;
  flavor: string;
  grade: number;
  regTime: string;
  reviewId: number;
  reviewImages?: IReviewImages[];
  tagNames: string[];
  user: {
    userId?: string;
    userName: string;
    userImage?: string;
  };
  product?: {
    id: number;
    name: string;
    avgGrade: number;
    localPath: string;
  };
}
