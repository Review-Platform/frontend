import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../../../atoms/loggedInAtom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

import { getLoggedInInfo } from "../../../apis/api/accountApi";
import { useQueryClient } from "react-query";

interface IUserInfo {
  id: string;
  loggedIn: boolean;
  nickname: string;
  userEmail: string;
  userImage: File | null;
}
import { useQuery } from "react-query";
import { myReviews } from "../../../apis/api/reviewApi";
import { IReview } from "../../../interfaces/review";
import ReviewBoxHorizontal from "../../../components/reviewBox/horizontal/ReviewBoxHorizontal";


const MyPage = () => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue<ILoggedInAtom>(loggedInAtom);



  
  const { data } = useQuery<IReview[]>(["myReviews", loginInfo.id], myReviews);

  return (
    <S.MyPageContainer>
      <S.MyPageArea>
        <S.Title>마이 페이지</S.Title>
        <S.TotalInfoArea>
          <S.MyImage
            src={loginInfo.userImage === null ? "/images/default.png" : ""}
          />
          <S.InfoArea>
            <S.MyInfo>
              <S.MyNickName>아이디 : {loginInfo.id}</S.MyNickName>
              <S.MyEmail>이메일 : {loginInfo.userEmail}</S.MyEmail>
            </S.MyInfo>
            <S.InfoModifyArea
              onClick={() => navigate(`/modify-info/${loginInfo.id}`)}
            >
              <S.InfoModifyText>회원정보 수정</S.InfoModifyText>
              <S.InfoModifyIcon />
            </S.InfoModifyArea>
          </S.InfoArea>
        </S.TotalInfoArea>
      </S.MyPageArea>
      <S.ReviewArea>
        <S.Title>내가 쓴 리뷰</S.Title>
        <S.ReviewList>
          {data?.length ? (
            data?.map((review) => (
              <ReviewBoxHorizontal review={review} product={null} />
            ))
          ) : (
            <S.SubTitle>작성하신 리뷰가 없습니다.</S.SubTitle>
          )}
        </S.ReviewList>
      </S.ReviewArea>
    </S.MyPageContainer>
  );
};

export default MyPage;
