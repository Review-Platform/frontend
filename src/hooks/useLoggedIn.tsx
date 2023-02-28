import { useRecoilState } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../atoms/loggedInAtom";
import { useEffect, useState } from "react";
import { getLoggedInInfo } from "../api/accountApi";

export default function useLoggedIn(data: string) {
  const [loggedIn, setLoggedIn] = useRecoilState<ILoggedInAtom>(loggedInAtom);
  data !== ""
    ? setLoggedIn({ isLoggedIn: true, id: data })
    : setLoggedIn({ isLoggedIn: false, id: "" });

  return loggedIn;
}
