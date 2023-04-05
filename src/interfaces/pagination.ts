import { SetStateAction } from "react";

export interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}
