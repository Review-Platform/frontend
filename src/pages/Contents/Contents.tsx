import MainHeader from "../../components/mainHeader/MainHeader";
import { ContentsWrapper } from "./ContentsStyles";
import { Outlet } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Contents() {
  return (
    <>
      <MainHeader />
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
    </>
  );
}
export default Contents;
