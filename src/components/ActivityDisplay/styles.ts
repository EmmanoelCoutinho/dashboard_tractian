import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  width: 80vw;
  height: 10rem;

  margin: auto;
  border: 1px solid red;
`;

export const ProgressiveBar = styled.div`
  width: 50%;
  height: 50%;

  border: 1rem solid red;
  border-bottom: none;
  border-radius: 50%;
`;

export const ContainerListStatus = styled.div`
  background-color: red;
`;

export const ListStatus = styled.li`
  color: white;
`;
