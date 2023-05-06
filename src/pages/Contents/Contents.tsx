import MainHeader from "../../components/mainHeader/MainHeader";
import { ContentsWrapper } from "./ContentsStyles";
import { Outlet } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { Suspense } from "react";

function Contents() {
  return (
    <>
      <MainHeader />
      <ContentsWrapper>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ContentsWrapper>
    </>
  );
}
export default Contents;
