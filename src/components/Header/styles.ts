import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.secundary};
`;

export const ImgLogo = styled.img`
  max-width: 10rem;
  width: auto;
`;
