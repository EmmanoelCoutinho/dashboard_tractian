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

export const CaptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 4rem;
  width: 80%;

  text-align: start;

  background-color: ${(props) => props.theme.colors.background};
  margin-left: 0 auto;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.secundary};
  margin: 1rem 0;
`;

export const List = styled.p`
  display: flex;

  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secundary};
`;
