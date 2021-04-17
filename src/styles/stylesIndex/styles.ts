import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.tertiaty};
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ContainerBodyLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40rem;

  background-color: black;
`;

export const ContainerBodyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 26rem;

  background-color: black;
`;

export const ContainerInnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 96%;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};
`;
export const ContainerInnerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 96%;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 720px) {
  }
`;
