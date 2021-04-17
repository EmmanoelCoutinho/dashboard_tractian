import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 20rem;
  /* place-content: center; */
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;

export const CaptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${(props) => props.theme.colors.background};
  height: 2rem;
  width: 100%;

  padding: 0 1rem;
`;

export const List = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: blue;
`;
