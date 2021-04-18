import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100%;

  background-color: ${(props) => props.theme.colors.tertiaty};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100%;
`;

export const MainContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  height: 90vh;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};
  margin: 0.8rem 0;
`;
