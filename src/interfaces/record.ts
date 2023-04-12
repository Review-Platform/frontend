export interface IRecordProduct {
  name: string;
  images: string;
  hashtags: string[] | null;
  productId: number;
}
export interface IRecords {
  myBest: IRecordProduct[];
  mostReviews: IRecordProduct[];
}
