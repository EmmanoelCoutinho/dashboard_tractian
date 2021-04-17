import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  width: 100%;
  height: 24rem;
  align-items: center;
  margin: 0 auto;
`;

export const HighchartsContainer = styled.div`
  color: red;
`;

export const CaptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  text-align: start;

  background-color: ${(props) => props.theme.colors.background};
  height: 4rem;
  width: 80%;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secundary};
  padding: 1rem 0;
`;

export const List = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: blue;
`;
