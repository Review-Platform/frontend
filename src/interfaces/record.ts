export interface IRecordProduct {
  name: string;
  images: string;
  hashtags: string[] | null;
}
export interface IRecords {
  myBest: IRecordProduct[];
  mostReviews: IRecordProduct[];
}
