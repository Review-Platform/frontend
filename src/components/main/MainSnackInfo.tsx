import React, { useState } from "react";
import styled from "styled-components";
import {
  HashTag,
  HashTagArea,
  ProfileArea,
  ProfileImg,
  RateArea,
  RateImg,
  RateLeftText,
  RateRightText,
  ReviewArea,
  ReviewText,
  SnackArea,
  SnackImg,
  SnackInfo,
  SnackName,
} from "../../styles/MainSnackInfoStyles";

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
    <SnackInfo>
      <SnackArea>
        <SnackImg src={require("../../imgs/Cheetos.png")} />
        <SnackName>{snackName}</SnackName>
      </SnackArea>
      <ReviewArea>
        <ProfileArea>
          <ProfileImg />
          {id}
        </ProfileArea>
        <RateArea>
          <RateLeftText>평점</RateLeftText>
          <RateImg src={require("../../imgs/FullStar.png")} />
          <RateImg src={require("../../imgs/FullStar.png")} />
          <RateImg src={require("../../imgs/FullStar.png")} />
          <RateImg src={require("../../imgs/FullStar.png")} />
          <RateImg src={require("../../imgs/EmptyStar.png")} />
          <RateRightText>{rate}/5</RateRightText>
        </RateArea>
        <HashTagArea>
          {hashTag.map((tag) => (
            <HashTag>{`#${tag}`}</HashTag>
          ))}
        </HashTagArea>
        <ReviewText>{reviewText}</ReviewText>
      </ReviewArea>
    </SnackInfo>
  );
};

export default MainSnackReview;
