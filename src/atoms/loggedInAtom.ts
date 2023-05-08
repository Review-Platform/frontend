import { atom } from "recoil";

export interface ILoggedInAtom {
  id: string;
  loggedIn: boolean;
  nickname: string;
  userEmail: string;
  userImage: File | null;
}

export const loggedInAtom = atom<ILoggedInAtom>({
  key: "loggedIn",
  default: {
    id: "",
    loggedIn: false,
    nickname: "",
    userEmail: "",
    userImage: null,
  },
});
