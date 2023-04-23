import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../../apis/api/productApi";
import ProductInformation from "../../../components/product/ProductInformation";
import {
  IHashTag,
  IProductInfo,
  ISearchForm,
} from "../../../interfaces/productInfo";
import * as S from "./style";
import { useForm } from "react-hook-form";
import HashTagButton from "../../../components/hashTag/HashTagButton";
import Pagination from "../../../components/pagination/Pagination";

const Product = () => {
  const [total, setTotal] = useState(16);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
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

  const limit = 16;
  const offset = (page - 1) * limit;

  const { data } = useQuery<IProductInfo[]>("product", getProduct, {
    select: (products) =>
      products.filter((product) => product.name.includes(keyword)),
    onSuccess: (data) => {
      setTotal(data.length);
    },
  });

  const { register, handleSubmit } = useForm<ISearchForm>();

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

  useEffect(() => {
    const afterTotal = data
      ?.map((product) =>
        brand.length === 0 ? true : brand.includes(product.brand) ? true : false
      )
      .filter((value) => value !== false).length;
    console.log(afterTotal);
    setTotal((prev) => afterTotal as any);
  }, [brand]);

  console.log(total);

  return (
    <S.ContentsWrapperTwo>
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
          .filter((product) => product !== null)
          .slice(offset, offset + limit)}
      </S.ProductArea>
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
    </S.ContentsWrapperTwo>
  );
};
export default Product;
