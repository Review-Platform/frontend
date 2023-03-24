export interface IProductInfo {
  avgGrade: number;
  brand: string;
  id: number;
  kcal: number;
  localPath: string;
  name: string;
}

export interface IHashTag {
  [key: string]: boolean;
}

export interface ISearchForm {
  keyword: string;
}
