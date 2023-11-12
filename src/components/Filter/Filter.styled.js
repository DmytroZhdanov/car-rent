import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  margin-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;

    margin-top: 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) and (max-width: 1439px) {
    flex-wrap: wrap;

    width: 584px;

    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    justify-content: center;

    margin-top: 60px;
  }
`;

export const WrapperDiv = styled.div`
  position: relative;

  font-size: 18px;
  font-weight: 500;
  line-height: ${20 / 18};
`;

export const Label = styled.label`
  display: block;

  font-weight: 500;
  font-size: 14px;
  line-height: ${18 / 14};
  color: ${({ theme }) => theme.color.greyFilterTitle};

  margin-bottom: 8px;
`;

export const Legend = styled.legend`
  display: block;

  font-weight: 500;
  font-size: 14px;
  line-height: ${18 / 14};
  color: ${({ theme }) => theme.color.greyFilterTitle};

  margin-bottom: 8px;
`;

export const InputWrapperDiv = styled.div`
  display: flex;

  font-weight: 500;
  font-size: 18px;
  line-height: ${20 / 18};

  & input:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.blue};
  }
`;

export const InputDiv = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 14px 24px;

  border: none;
  background-color: ${({ theme }) => theme.color.greyBackgroundSelect};

  font-weight: 500;
  font-size: 18px;
  line-height: ${20 / 18};

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }
`;

export const MileageLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 24px;
`;

export const FromInput = styled(Input)`
  border-radius: 14px 0 0 14px;
  border-right: 1px solid ${({ theme }) => theme.color.greyOption};
  padding-left: 72px;
`;

export const ToInput = styled(Input)`
  border-radius: 0 14px 14px 0;
  padding-left: 52px;
`;

export const Button = styled.button`
  padding: 14px 44px;

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-self: flex-end;
  }
`;
