import axios from "axios";
import { useQuery } from "react-query";
import { getProduct } from "../../../apis/api/productApi";
import ProductInformation from "../../../components/product/ProductInformation";
import { IProductInfo } from "../../../interfaces/productInfo";
import { ContentsWrapper } from "../../../styles/ContentsStyles";
import {
  Category,
  CategoryArea,
  CategoryContainer,
  CategoryLabel,
  Filter,
  FilterArea,
  FilterTitle,
  ProductArea,
  RankingNavImg,
  RoutineArea,
  RoutineImg,
  RoutineText,
  SearchArea,
  SearchButton,
  SearchFilterArea,
  SearchInput,
  TasteFilter,
} from "../../../styles/ProductStyles";

const Product = () => {
  const { data } = useQuery<IProductInfo[]>("product", () => getProduct());
  console.log(data);

  return (
    <ContentsWrapper>
      <RankingNavImg
        src={require("../../../imgs/navImage/rankingNavImage.png")}
      />
      <RoutineArea>
        <RoutineImg src={require("../../../imgs/logo/routineLogo.png")} />
        <RoutineText>
          지금 이 순간에 가장 적합한 과자 종류들을 만나보세요.
        </RoutineText>
      </RoutineArea>
      <SearchFilterArea>
        <FilterArea>
          <Filter>
            <FilterTitle>BRAND</FilterTitle>
            <CategoryArea>
              <CategoryContainer>
                <Category id="orion" name="brand" value="orion"></Category>
                <CategoryLabel htmlFor="orion">오리온</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="lotte" name="brand" value="lotte"></Category>
                <CategoryLabel htmlFor="lotte">롯데</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="haetae" name="brand" value="haetae"></Category>
                <CategoryLabel htmlFor="haetae">해태</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category
                  id="nongshim"
                  name="brand"
                  value="nongshim"
                ></Category>
                <CategoryLabel htmlFor="nongshim">농심</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="crown" name="brand" value="crown"></Category>
                <CategoryLabel htmlFor="crown">크라운</CategoryLabel>
              </CategoryContainer>
            </CategoryArea>
          </Filter>
          <TasteFilter>
            <FilterTitle>TASTE</FilterTitle>
            <CategoryArea>
              <CategoryContainer>
                <Category id="sweet" name="taste" value="sweet"></Category>
                <CategoryLabel htmlFor="sweet">단맛</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="salty" name="taste" value="salty"></Category>
                <CategoryLabel htmlFor="salty">짠맛</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="sour" name="taste" value="sour"></Category>
                <CategoryLabel htmlFor="sour">신맛</CategoryLabel>
              </CategoryContainer>
              <CategoryContainer>
                <Category id="spicy" name="taste" value="spicy"></Category>
                <CategoryLabel htmlFor="spicy">매운맛</CategoryLabel>
              </CategoryContainer>
            </CategoryArea>
          </TasteFilter>
        </FilterArea>
        <SearchArea>
          <SearchInput placeholder="과자 이름을 입력해주세요."></SearchInput>
          <SearchButton>검 색</SearchButton>
        </SearchArea>
      </SearchFilterArea>
      <ProductArea>
        {data?.map((product) => (
          <ProductInformation product={product} />
        ))}
      </ProductArea>
    </ContentsWrapper>
  );
};
export default Product;
