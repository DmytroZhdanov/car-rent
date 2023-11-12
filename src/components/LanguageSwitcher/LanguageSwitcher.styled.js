import styled from "@emotion/styled";

export const SwitcherDiv = styled.div`
  display: flex;

  font-size: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: 52px;
  }
`;

export const SwitchButton = styled.button`
  border-radius: 8px;
  border: 1px solid
    ${({ theme, buttonLanguage, currentLanguage }) =>
      buttonLanguage === currentLanguage ? theme.color.greyBackgroundSelect : theme.color.blue};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.greyBackgroundSelect};
  }
`;
