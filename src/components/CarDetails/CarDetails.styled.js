import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  width: 541px;
  padding: 40px;
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TitleH2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: ${24 / 18};

  margin-bottom: 8px;
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const DetailsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;

  font-size: 12px;
  line-height: ${18 / 12};

  color: ${({ theme }) => theme.color.greyDescription};

  & > li:not(:nth-of-type(1))::before {
    content: "|";
    margin-right: 6px;
  }

  &:nth-of-type(1) {
    margin-bottom: 14px;
  }

  &:nth-of-type(2) {
    margin-bottom: 24px;
  }
`;

export const DescriptionP = styled.p`
  font-size: 14px;
  line-height: ${20 / 14};

  margin-bottom: 24px;
`;

export const TitleH3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: ${20 / 14};

  margin-bottom: 8px;
`;

export const ConditionsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: ${18 / 12};
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.color.blackSecond};

  margin-bottom: 24px;
`;

export const ConditionsLi = styled.li`
  padding: 7px 14px;
  background-color: ${({ theme }) => theme.color.greyBackgroundTag};
  border-radius: 36px;
`;

export const ConditionsSpan = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.blue};
`;

export const ButtonA = styled.a`
  padding: 12px 50px;

  font-weight: 600;
  font-size: 14px;
  line-height: ${20 / 14};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 12px;

  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueHover};
  }
`;
