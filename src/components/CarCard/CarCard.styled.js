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
  width: 18px;
  height: 18px;
  background-color: transparent;

  & > svg {
    position: absolute;
    top: 14px;
    right: 14px;

    width: 18px;
    height: 18px;

    stroke: ${({ theme, favorite }) => (favorite ? theme.color.blue : theme.color.white)};
    fill: ${({ theme, favorite }) => (favorite ? theme.color.blue : "transparent")};

    z-index: 2;
    transition: transform ${({ theme }) => theme.transition.main};

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
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

export const DetailsP = styled.p`
  color: ${({ theme }) => theme.color.greyDescription};
  font-size: 12px;
  line-height: ${18 / 12};

  &:nth-of-type(1) {
    margin-bottom: 4px;
  }

  &:nth-of-type(2) {
    margin-bottom: 28px;
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
