import { atom } from "recoil";

export interface ILoggedInAtom {
  isLoggedIn: boolean;
  id: string;
}

export const loggedInAtom = atom<ILoggedInAtom>({
  key: "loggedIn",
  default: {
    isLoggedIn: false,
    id: "",
  },
});
