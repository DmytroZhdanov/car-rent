import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContainerDiv = styled.div`
  padding-top: 60px;

  text-align: center;

  color: ${({ theme }) => theme.color.greyBackgroundSelect};
`;

export const TitleH1 = styled.h1`
  margin-bottom: 20px;

  font-weight: 600;
  font-size: 48px;
`;

export const DescriptionP = styled.p`
  margin-bottom: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
  }
`;

export const ActionP = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
  }
`;

export const StartLink = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 12px;

  color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};

  transition: all ${({ theme }) => theme.transition.main};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.greyBackgroundSelect};
    background-color: ${({ theme }) => theme.color.blueHover};
  }
`;
