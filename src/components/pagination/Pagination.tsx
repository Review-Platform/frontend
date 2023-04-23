import { useState } from "react";
import { PaginationProps } from "../../interfaces/pagination";
import * as S from "./style";

const Pagination = ({ total = 1, limit, page, setPage }: PaginationProps) => {
  const numPages = Math.ceil(total / limit);
  const MaxOffset = Math.ceil(numPages / 5);

  const [offset, setOffset] = useState(0);
  const pageArr = Array.from({ length: numPages }, (v, i) => i + 1);

  return (
    <>
      <S.Nav>
        <S.Button
          onClick={() => {
            setOffset((prev) => (prev ? prev - 1 : 0));
          }}
          disabled={offset === 0}
        >
          &lt;
        </S.Button>
        {pageArr.slice(offset * 5, offset * 5 + 5).map((i) => (
          <S.Button
            key={i}
            onClick={() => {
              setPage(i);
              window.scrollTo(0, 500);
            }}
            aria-current={page === i ? "page" : undefined}
          >
            {i}
          </S.Button>
        ))}

        <S.Button
          onClick={() => {
            setOffset((prev) => prev + 1);
          }}
          disabled={offset === MaxOffset - 1}
        >
          &gt;
        </S.Button>
      </S.Nav>
    </>
  );
};

export default Pagination;
