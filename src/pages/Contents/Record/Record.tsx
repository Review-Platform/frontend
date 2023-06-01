import useRecord from "../../../hooks/useRecord";
import * as S from "./style";
import RecordProductInformation from "../../../components/record/RecordProductInformation";
import { useRecoilValue } from "recoil";
import { loggedInAtom } from "../../../atoms/loggedInAtom";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "../review/style";

function Record() {
  const {
    ranking,
    myHashtags,
    myBestProd,
    mostReviewsProd,
    seeNextMyBest,
    seeNextMostReviews,
    myBestRank,
    topReview,
  } = useRecord();
  const navigate = useNavigate();
  const loggedInInfo = useRecoilValue(loggedInAtom);
  const handleGoLogin = () => navigate("/login");
  const handleGoProduct = () => navigate("/product");
  const handleGoReviews = () => navigate("/review");
  console.log(topReview);
  return (
    <S.MainWrapper>
      <Suspense fallback={<Loading />}>
        <S.RankingTitle>Snack Ranking</S.RankingTitle>
        <S.RankingDescription>
          <S.RankingDescriptionText>
            리뷰된 과자들로 선정된 TOP 10 스낵 랭킹을 발표합니다. 해당 랭킹은 매
            월마다 재선정됩니다.
          </S.RankingDescriptionText>
        </S.RankingDescription>
        {ranking ? (
          <S.RankingContainer>
            {ranking.map((i, index) => (
              <S.RankingItem key={i.snackName}>
                <S.Rank>{index + 1}위</S.Rank>
                <S.RankingItemName>{i.snackName}</S.RankingItemName>
                <S.RankingItemGrade>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="26px"
                    height="26px"
                    viewBox="0 0 1280.000000 720.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <metadata>
                      Created by potrace 1.15, written by Peter Selinger
                      2001-2017
                    </metadata>
                    <g
                      transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)"
                      fill="#F48722"
                      stroke="none"
                    >
                      <path d="M5842 5866 c-445 -871 -557 -1085 -575 -1089 -12 -3 -553 -90 -1202 -193 -649 -103 -1182 -189 -1185 -191 -2 -2 384 -392 858 -866 l862 -862 -190 -1204 c-104 -663 -188 -1207 -186 -1209 2 -2 491 245 1087 547 595 303 1085 551 1089 551 4 0 495 -248 1090 -550 595 -303 1084 -549 1086 -547 2 2 -81 546 -186 1208 l-190 1204 862 862 c474 474 860 864 858 866 -3 2 -536 88 -1185 191 -649 103 -1190 190 -1202 193 -17 4 -135 227 -575 1089 -304 596 -555 1084 -558 1084 -3 0 -254 -488 -558 -1084z" />
                    </g>
                  </svg>
                  {`${Math.floor(i.grade)}.${Math.round((i.grade % 1) * 10)}`}
                </S.RankingItemGrade>
              </S.RankingItem>
            ))}
          </S.RankingContainer>
        ) : null}
        <S.RecordBox>
          <S.RecordTitle>Snack Record</S.RecordTitle>
          <S.RecordContainer>
            <S.RecordSubtitle>
              Snack of routine_ snack village.
            </S.RecordSubtitle>
            <S.RecordDescription>
              이번 한 달 동안 개인이 선호했던 과자들을 소개합니다.{"\n"} 본
              레코드는 본인이 직접 선호하고 추천했던 리뷰들이 반영됩니다.
            </S.RecordDescription>
            <S.GridContainer>
              {/*이번 달 나의 스낵 키워드*/}
              <S.RecordItem>
                <S.ItemTitle>이번 달 나의 스낵 키워드</S.ItemTitle>
                <S.Underline />
                {loggedInInfo ? (
                  myHashtags && myHashtags.length > 4 ? (
                    <S.HashtagGrid>
                      <S.GridItem_1>#{myHashtags?.[0]}</S.GridItem_1>
                      <S.GridItem_2>#{myHashtags?.[1]}</S.GridItem_2>
                      <S.GridItem_3>#{myHashtags?.[2]}</S.GridItem_3>
                      <S.GridItem_4>#{myHashtags?.[3]}</S.GridItem_4>
                      <S.GridItem_5>#{myHashtags?.[4]}</S.GridItem_5>
                    </S.HashtagGrid>
                  ) : (
                    <S.NoDataBox>
                      <S.NoDataImage
                        src={require("../../../imgs/recordPage/notLoggedIn.png")}
                      />
                      <S.NoDataText>
                        더 많은 리뷰를 작성하여{"\n"}나만의 레코드를
                        확인해보세요!
                      </S.NoDataText>
                      <S.Go onClick={handleGoProduct}>리뷰쓰러가기</S.Go>
                    </S.NoDataBox>
                  )
                ) : (
                  <S.NoDataBox>
                    <S.NoDataImage
                      src={require("../../../imgs/recordPage/notLoggedIn.png")}
                    />
                    <S.NoDataText>
                      로그인해서 나만의 레코드를 {"\n"} 더 자세히 확인해보세요!
                    </S.NoDataText>
                    <S.Go onClick={handleGoLogin}>로그인하기</S.Go>
                  </S.NoDataBox>
                )}
              </S.RecordItem>
              {/*이번 달 나의 최애 스낵*/}
              <S.RecordItem>
                <S.ItemTitle>이번 달 나의 최애 스낵</S.ItemTitle>
                <S.Underline />
                {loggedInInfo ? (
                  myBestProd ? (
                    <S.RecordContents>
                      <RecordProductInformation
                        big={true}
                        product={myBestProd}
                      />
                      <S.RecordContentsRightFirst>
                        <S.RankingNumber>{myBestRank}</S.RankingNumber>
                        <S.NextBtn onClick={seeNextMyBest}>{">"}</S.NextBtn>
                      </S.RecordContentsRightFirst>
                    </S.RecordContents>
                  ) : (
                    <S.NoDataBox>
                      <S.NoDataImage
                        src={require("../../../imgs/recordPage/notLoggedIn.png")}
                      />
                      <S.NoDataText>
                        더 많은 리뷰를 작성하여{"\n"}나만의 레코드를
                        확인해보세요!
                      </S.NoDataText>
                      <S.Go onClick={handleGoProduct}>리뷰쓰러가기</S.Go>
                    </S.NoDataBox>
                  )
                ) : (
                  <S.NoDataBox>
                    <S.NoDataImage
                      src={require("../../../imgs/recordPage/notLoggedIn.png")}
                    />
                    <S.NoDataText>
                      로그인해서 나만의 레코드를 {"\n"} 더 자세히 확인해보세요!
                    </S.NoDataText>
                    <S.Go onClick={handleGoLogin}>로그인하기</S.Go>
                  </S.NoDataBox>
                )}
              </S.RecordItem>
              {/*리뷰가 많은 과자를 확인해보세요.*/}
              <S.RecordItem>
                <S.ItemTitle>리뷰가 많은 과자를 확인해보세요.</S.ItemTitle>
                <S.UnderlineThird />
                <S.RecordContents>
                  {mostReviewsProd ? (
                    <RecordProductInformation
                      big={false}
                      product={mostReviewsProd}
                    />
                  ) : null}
                  <S.RecordContentsRightSecond>
                    <S.NextBtn onClick={seeNextMostReviews}>{">"}</S.NextBtn>
                    <S.ListKeywordsText>
                      이런 키워드에 해당 돼요.
                    </S.ListKeywordsText>
                    {mostReviewsProd ? (
                      <S.KeywordsList>
                        <li>#{mostReviewsProd?.hashtags?.[2]}</li>
                        <li>#{mostReviewsProd?.hashtags?.[1]}</li>
                        <li>#{mostReviewsProd?.hashtags?.[0]}</li>
                      </S.KeywordsList>
                    ) : null}
                  </S.RecordContentsRightSecond>
                </S.RecordContents>
              </S.RecordItem>
              {/*이 과자 리뷰에 가장 많은 추천을 받았어요.*/}
              <S.RecordItem>
                <S.ItemTitle>
                  이 과자 리뷰에 가장 많은 추천을 받았어요.
                </S.ItemTitle>
                <S.UnderlineLast />
                <S.RecordContents>
                  {topReview ? (
                    <RecordProductInformation big={false} product={topReview} />
                  ) : null}
                  <S.RecordContentsRightSecond>
                    <S.ShowReviewLikesText>
                      이 리뷰에{"\n"} <S.BigText>총</S.BigText>{" "}
                      <S.ReviewLikeNumber>
                        {topReview?.reviewLikeCount}명
                      </S.ReviewLikeNumber>
                      이{"\n"}
                      추천했어요.
                    </S.ShowReviewLikesText>
                    <S.GotoReviewsLink onClick={handleGoReviews}>
                      리뷰 자세히 보기
                    </S.GotoReviewsLink>
                  </S.RecordContentsRightSecond>
                </S.RecordContents>
              </S.RecordItem>
            </S.GridContainer>
          </S.RecordContainer>
        </S.RecordBox>
      </Suspense>
    </S.MainWrapper>
  );
}
export default Record;
