import useRecord from "../../../hooks/useRecord";
import * as S from "./style";

function Record() {
  const { myBest, mostReviews } = useRecord();
  console.log(myBest, mostReviews);
  return (
    <S.MainWrapper>
      <S.RankingTitle>Snack Ranking</S.RankingTitle>
      <S.RankingDescription>
        <S.RankingDescriptionText>
          리뷰된 과자들로 선정된 TOP 10 스낵 랭킹을 발표합니다. 해당 랭킹은 매
          월마다 재선정됩니다.
        </S.RankingDescriptionText>
      </S.RankingDescription>
      <S.Ranking></S.Ranking>
      <S.RecordBox>
        <S.RecordTitle>Snack Record</S.RecordTitle>
        <S.RecordContainer>
          <S.RecordSubtitle>Snack of routine_ snack village.</S.RecordSubtitle>
          <S.RecordDescription>
            이번 한 달 동안 개인이 선호했던 과자들을 소개합니다.{"\n"} 본
            레코드는 본인이 직접 선호하고 추천했던 리뷰들이 반영됩니다.
          </S.RecordDescription>
          <S.GridContainer>
            <S.RecordItem>
              <S.ItemTitle>이번 달 나의 스낵 키워드</S.ItemTitle>
              <S.Underline />
            </S.RecordItem>
            <S.RecordItem>
              <S.ItemTitle>이번 달 나의 최애 스낵</S.ItemTitle>
              <S.Underline />
            </S.RecordItem>
            <S.RecordItem>
              <S.ItemTitle>많은 리뷰의 과자를 확인해보세요.</S.ItemTitle>
              <S.UnderlineThird />
            </S.RecordItem>
            <S.RecordItem>
              <S.ItemTitle>
                이 과자 리뷰에 가장 많은 추천을 받았어요.
              </S.ItemTitle>
              <S.UnderlineLast />
            </S.RecordItem>
          </S.GridContainer>
        </S.RecordContainer>
      </S.RecordBox>
    </S.MainWrapper>
  );
}
export default Record;
