import React, { SetStateAction } from "react";
import styled from "styled-components";
import { HashTagButtonProps } from "../../interfaces/hashTagButton";
import * as S from "./style";

const HashTagButton = ({
  tagName,
  selected,
  setHashTag,
  setSelectedHash,
}: HashTagButtonProps) => {
  return (
    <S.HashTagBtn
      onClick={() => {
        setHashTag((current) => {
          const newHashTag = { ...current };
          newHashTag[tagName] = !selected;
          return newHashTag;
        });
        setSelectedHash((current) => {
          const newSelectedHash = [...current];

          if (newSelectedHash.includes(tagName)) {
            return newSelectedHash.filter((hashTag) => hashTag !== tagName);
          } else {
            newSelectedHash.push(tagName);
          }
          return newSelectedHash;
        });
      }}
      selected={selected}
    >
      <S.HashTagText>#{tagName}</S.HashTagText>
    </S.HashTagBtn>
  );
};

export default HashTagButton;
