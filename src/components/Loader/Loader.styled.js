import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center
  align-items: center;
`;

export const Container = styled.div`
  margin: auto;
`;
