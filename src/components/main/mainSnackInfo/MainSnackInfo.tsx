import React, { useState } from "react";
import * as S from "./style";

const MainSnackReview = () => {
  const [snackImgUrl, setSnackImgUrl] = useState("");
  const [snackName, setSnackName] = useState("치토스");
  const [id, setId] = useState("joohoneywalker");
  const [rate, setRate] = useState(5);
  const [hashTag, setHashTag] = useState(["달달한 맛", "고소한", "안주"]);
  const [reviewText, setReviewText] = useState(
    "무난하게 먹기 좋아서 추천합니다 ! 개인적으로는 혼자 영화보면서 먹기에도 좋을 것 같아요 :)"
  );
  return (
    <S.SnackInfo>
      <S.SnackArea>
        <S.SnackImg src={require("../../../imgs/mainPage/Cheetos.png")} />
        <S.SnackName>{snackName}</S.SnackName>
      </S.SnackArea>
      <S.ReviewArea>
        <S.ProfileArea>
          <S.ProfileImg />
          {id}
        </S.ProfileArea>
        <S.RateArea>
          <S.RateLeftText>평점</S.RateLeftText>
          <S.RateImg src={require("../../../imgs/mainPage/FullStar.png")} />
          <S.RateImg src={require("../../../imgs/mainPage/FullStar.png")} />
          <S.RateImg src={require("../../../imgs/mainPage/FullStar.png")} />
          <S.RateImg src={require("../../../imgs/mainPage/FullStar.png")} />
          <S.RateImg src={require("../../../imgs/mainPage/EmptyStar.png")} />
          <S.RateRightText>{rate}/5</S.RateRightText>
        </S.RateArea>
        <S.HashTagArea>
          {hashTag.map((tag) => (
            <S.HashTag>{`#${tag}`}</S.HashTag>
          ))}
        </S.HashTagArea>
        <S.ReviewText>{reviewText}</S.ReviewText>
      </S.ReviewArea>
    </S.SnackInfo>
  );
};

export default MainSnackReview;
