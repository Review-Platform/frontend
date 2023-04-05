import React, { SetStateAction } from "react";
import styled from "styled-components";
import { PaginationProps } from "../../interfaces/pagination";
import * as S from "./style";

const Pagination = ({ total = 1, limit, page, setPage }: PaginationProps) => {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <S.Nav>
        <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </S.Button>
        {Array(numPages)
          .fill(null)
          .map((_, i) => (
            <S.Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </S.Button>
          ))}
        <S.Button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </S.Button>
      </S.Nav>
    </>
  );
};

export default Pagination;
