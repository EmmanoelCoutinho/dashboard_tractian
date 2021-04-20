import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  text-align: center;

  background-color: ${(props) => props.theme.colors.tertiaty};

  @media (min-width: 720px) {
    height: 100vh;
    overflow: hidden;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const ContainerBodyLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 25rem;

  background-color: ${(props) => props.theme.colors.tertiaty};

  @media (min-width: 720px) {
    height: 30rem;
    margin-top: 1.5rem;
  }
`;

export const ContainerBodyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 30rem;

  background-color: ${(props) => props.theme.colors.tertiaty};

  @media (min-width: 720px) {
    margin-top: 1.5rem;
  }
`;

export const ContainerInnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  height: 96%;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};
`;
export const ContainerInnerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  height: 96%;
  width: 94%;

  margin: 1rem 0;

  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secundary};
  margin: 1rem 0;
  font-size: 1.5rem;
`;
