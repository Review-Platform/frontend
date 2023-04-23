export interface ICreateReviewForm {
  image: FileList;
  content?: string;
  grade: number;
  flavor: number[];
  hashtags: boolean[];
}
