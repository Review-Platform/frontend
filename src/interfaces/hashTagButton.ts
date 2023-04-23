import { SetStateAction } from "react";

export interface IHashTag {
  [key: string]: boolean;
}

export interface HashTagButtonProps {
  tagName: string;
  selected: boolean;
  setHashTag: React.Dispatch<SetStateAction<IHashTag>>;
  setSelectedHash: React.Dispatch<SetStateAction<string[]>>;
}

export interface ButtonProps {
  selected: boolean;
}
