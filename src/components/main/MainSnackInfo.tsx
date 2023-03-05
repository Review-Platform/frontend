import React, { useState } from "react";
import styled from "styled-components";

const SnackInfo = styled.div`
  display: flex;
  width: 45%;
  border: 2px solid #ff8a3b;
  border-radius: 15px;
  background-color: white;
  margin-right: 15px;
`;

const SnackArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const SnackImg = styled.img`
  height: 80%;
`;

const SnackName = styled.span``;

const ProfileArea = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  background-color: #ffc107;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const RateArea = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

const RateLeftText = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

const RateRightText = styled(RateLeftText)`
  color: #ffc107;
  margin-left: 5px;
`;

const RateImg = styled.img`
  width: 16px;
  height: 16px;
`;

const HashTagArea = styled.div`
  height: 20%;
`;

const HashTag = styled.span`
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px;
  font-size: 15px;
  margin: 0 10px 10px 0;
`;

const ReviewText = styled.span`
  height: 30%;
  font-size: 15px;
`;

const ReviewArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 5% 0;
`;

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
