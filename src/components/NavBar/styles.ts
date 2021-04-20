import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 3.2rem;

  background-color: ${(props) => props.theme.colors.background};
  padding: 0 0.2rem;
  margin-bottom: 0.2rem;
`;

export const ActiveButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 7rem;

  color: #9bd2ff;

  border: none;
  border-bottom: 1px solid #9bd2ff;
  background-color: inherit;
`;

export const RegularButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 7rem;

  color: #b3b3b3;

  border: none;
  background-color: inherit;
`;

export const ButtonTitle = styled.h1`
  display: flex;
  align-items: center;

  font-size: 1rem;
`;
