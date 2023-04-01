import { useState } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../../apis/api/productApi";
import ProductInformation from "../../../components/product/ProductInformation";
import {
  IHashTag,
  IProductInfo,
  ISearchForm,
} from "../../../interfaces/productInfo";
import { ContentsWrapper } from "../ContentsStyles";
import * as S from "./style";
import { useForm } from "react-hook-form";
import HashTagButton from "../../../components/hashTag/HashTagButton";

const Product = () => {
  const [page, setPage] = useState(1);

  const limit = 16;
  const offset = (page - 1) * limit;

  const [keyword, setKeyword] = useState("");
  const { data } = useQuery<IProductInfo[]>("product", getProduct, {
    // select: (products) => {
    //   const searched = products.filter((product) =>
    //     product.name.includes(keyword)
    //   );
    //   const filtered = searched.filter((product) =>
    //     brand.includes(product.brand)
    //   );
    //   return filtered;
    // },
    select: (products) =>
      products.filter((product) => product.name.includes(keyword)),
  });
  const { register, handleSubmit } = useForm<ISearchForm>();

  const [brand, setBrand] = useState<string[]>([]);
  const [selectedHash, setSelectedHash] = useState<string[]>([]);
  const [hashTag, setHashTag] = useState<IHashTag>({
    영화: false,
    안주: false,
    인기: false,
    가족: false,
    일상: false,
    오리지날: false,
    다이어트: false,
  });

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentBrandList = [...brand];
    const newBrandList = currentBrandList.includes(e.currentTarget.value)
      ? currentBrandList.filter((brand) => brand !== e.currentTarget.value)
      : [...currentBrandList, e.currentTarget.value];
    setBrand(newBrandList);
  };

  const onValid = (value: ISearchForm) => {
    setKeyword(value.keyword);
  };

  console.log(data);
  console.log(brand);

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
        <S.LeftArea>
          <S.FilterArea>
            <S.Filter>
              <S.FilterTitle>BRAND</S.FilterTitle>
              <S.CategoryArea>
                <S.CategoryContainer>
                  <S.Category
                    onChange={onCheck}
                    id="orion"
                    name="brand"
                    value="ORION"
                  ></S.Category>
                  <S.CategoryLabel htmlFor="orion">오리온</S.CategoryLabel>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.Category
                    onChange={onCheck}
                    id="lotte"
                    name="brand"
                    value="LOTTE"
                  ></S.Category>
                  <S.CategoryLabel htmlFor="lotte">롯데</S.CategoryLabel>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.Category
                    onChange={onCheck}
                    id="haitai"
                    name="brand"
                    value="HAITAI"
                  ></S.Category>
                  <S.CategoryLabel htmlFor="haetae">해태</S.CategoryLabel>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.Category
                    onChange={onCheck}
                    id="nongshim"
                    name="brand"
                    value="NONGSHIM"
                  ></S.Category>
                  <S.CategoryLabel htmlFor="nongshim">농심</S.CategoryLabel>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.Category
                    onChange={onCheck}
                    id="crown"
                    name="brand"
                    value="CROWN"
                  ></S.Category>
                  <S.CategoryLabel htmlFor="crown">크라운</S.CategoryLabel>
                </S.CategoryContainer>
              </S.CategoryArea>
            </S.Filter>
          </S.FilterArea>
          <S.SearchArea onSubmit={handleSubmit(onValid)}>
            <S.SearchInput
              {...register("keyword")}
              placeholder="과자 이름을 입력해주세요."
            ></S.SearchInput>
            <S.SearchButton>검 색</S.SearchButton>
          </S.SearchArea>
        </S.LeftArea>
        <S.RightArea>
          <S.HashtagArea>
            <S.Filter>
              <S.FilterTitle>추천 해시태그</S.FilterTitle>
              <S.HashTagButtonArea>
                {Object.keys(hashTag).map((tagName) => (
                  <HashTagButton
                    tagName={tagName}
                    selected={hashTag[tagName]}
                    setHashTag={setHashTag}
                    setSelectedHash={setSelectedHash}
                    key={tagName}
                  />
                ))}
              </S.HashTagButtonArea>
            </S.Filter>
          </S.HashtagArea>
        </S.RightArea>
      </S.SearchFilterArea>
      <S.ProductArea>
        {data
          ?.map((product) =>
            brand.length === 0 ? (
              <ProductInformation key={product.id} product={product} />
            ) : brand.includes(product.brand) ? (
              <ProductInformation key={product.id} product={product} />
            ) : null
          )
          .slice(offset, offset + limit)}
      </S.ProductArea>
    </ContentsWrapper>
  );
};
export default Product;
