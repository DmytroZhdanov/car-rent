import { useResolvedPath } from "react-router-dom";

import { TitleH1, WrapperDiv } from "./PageTitle.styled";

import sprite from "assets/sprite/sprite.svg";

export default function PageTitle() {
  const { pathname } = useResolvedPath();
  const page = pathname.slice(1, pathname.length);

  return (
    <WrapperDiv>
      <TitleH1>{page}</TitleH1>

      <svg>
        <use href={`${sprite}#${page}`}></use>
      </svg>
    </WrapperDiv>
  );
}
