import { useQuery } from "react-query";
import { getProduct } from "../../../apis/api/productApi";
import ProductInformation from "../../../components/product/ProductInformation";
import { IProductInfo } from "../../../interfaces/productInfo";
import { ContentsWrapper } from "../ContentsStyles";
import * as S from "./style";

const Product = () => {
  const { data } = useQuery<IProductInfo[]>("product", () => getProduct());
  console.log(data);

  return (
    <ContentsWrapper>
      <S.RankingNavImg
        src={require("../../../imgs/navImage/rankingNavImage.png")}
      />
      <S.RoutineArea>
        <S.RoutineImg src={require("../../../imgs/logo/routineLogo.png")} />
        <S.RoutineText>
          지금 이 순간에 가장 적합한 과자 종류들을 만나보세요.
        </S.RoutineText>
      </S.RoutineArea>
      <S.SearchFilterArea>
        <S.FilterArea>
          <S.Filter>
            <S.FilterTitle>BRAND</S.FilterTitle>
            <S.CategoryArea>
              <S.CategoryContainer>
                <S.Category id="orion" name="brand" value="orion"></S.Category>
                <S.CategoryLabel htmlFor="orion">오리온</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category id="lotte" name="brand" value="lotte"></S.Category>
                <S.CategoryLabel htmlFor="lotte">롯데</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category
                  id="haetae"
                  name="brand"
                  value="haetae"
                ></S.Category>
                <S.CategoryLabel htmlFor="haetae">해태</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category
                  id="nongshim"
                  name="brand"
                  value="nongshim"
                ></S.Category>
                <S.CategoryLabel htmlFor="nongshim">농심</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category id="crown" name="brand" value="crown"></S.Category>
                <S.CategoryLabel htmlFor="crown">크라운</S.CategoryLabel>
              </S.CategoryContainer>
            </S.CategoryArea>
          </S.Filter>
          <S.TasteFilter>
            <S.FilterTitle>TASTE</S.FilterTitle>
            <S.CategoryArea>
              <S.CategoryContainer>
                <S.Category id="sweet" name="taste" value="sweet"></S.Category>
                <S.CategoryLabel htmlFor="sweet">단맛</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category id="salty" name="taste" value="salty"></S.Category>
                <S.CategoryLabel htmlFor="salty">짠맛</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category id="sour" name="taste" value="sour"></S.Category>
                <S.CategoryLabel htmlFor="sour">신맛</S.CategoryLabel>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.Category id="spicy" name="taste" value="spicy"></S.Category>
                <S.CategoryLabel htmlFor="spicy">매운맛</S.CategoryLabel>
              </S.CategoryContainer>
            </S.CategoryArea>
          </S.TasteFilter>
        </S.FilterArea>
        <S.SearchArea>
          <S.SearchInput placeholder="과자 이름을 입력해주세요."></S.SearchInput>
          <S.SearchButton>검 색</S.SearchButton>
        </S.SearchArea>
      </S.SearchFilterArea>
      <S.ProductArea>
        {data?.map((product) => (
          <ProductInformation product={product} />
        ))}
      </S.ProductArea>
    </ContentsWrapper>
  );
};
export default Product;
