import styled from "@emotion/styled";

export const ItemLi = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImageDiv = styled.div`
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 14px;
    width: 274px;
    height: 268px;
    background-image: ${({ theme }) => theme.gradient};
  }
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  background-color: transparent;

  & > svg {
    width: 18px;
    height: 18px;

    stroke: ${({ theme, favorite }) => (favorite ? theme.color.blue : theme.color.white)};
    fill: ${({ theme, favorite }) => (favorite ? theme.color.blue : "transparent")};

    transition: transform ${({ theme }) => theme.transition.main};
  }

  &:hover > svg,
  &:focus > svg {
    transform: scale(1.2);
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  font-weight: 500;
  line-height: ${24 / 16};
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const PriceP = styled.p`
  margin-right: 8px;
`;

export const DetailsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  color: ${({ theme }) => theme.color.greyDescription};
  font-size: 12px;
  line-height: ${18 / 12};
  margin-bottom: 28px;

  & > li:not(:nth-of-type(1))::before {
    content: "|";
    margin-right: 6px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: ${20 / 14};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};

  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.blueHover};
  }
`;
