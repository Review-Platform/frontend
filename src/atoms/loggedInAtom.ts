import { atom } from "recoil";

export interface ILoggedInAtom {
  loggedIn: boolean;
  id: string;
}

export const loggedInAtom = atom<ILoggedInAtom>({
  key: "loggedIn",
  default: {
    loggedIn: false,
    id: "",
  },
});
