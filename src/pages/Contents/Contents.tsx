import MainHeader from "../../components/mainHeader/MainHeader";
import { ContentsWrapper } from "./ContentsStyles";
import { Outlet } from "react-router-dom";

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
