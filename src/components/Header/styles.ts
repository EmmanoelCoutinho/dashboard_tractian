import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  width: 100vw;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.secundary};

  padding: 0 0.5rem;
`;

export const ImgLogo = styled.img`
  max-width: 10rem;
  width: auto;
`;
