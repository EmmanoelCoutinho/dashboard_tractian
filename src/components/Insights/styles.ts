import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  height: 60vh;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};
  margin: 0.4rem 0;
  padding: 0.5rem 0;

  @media (min-width: 720px) {
    height: 94vh;
    width: 55%;
    margin: auto 0;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secundary};
  margin-bottom: 0.5rem;
`;

export const InsightsBlocks = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3.6rem;

  border-bottom: 1px solid gray;
  border-radius: 5px;

  margin-bottom: 0.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);

  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const InsightsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 80%;

  background-color: rgba(255, 46, 58, 0.3);

  border-radius: 50%;
  border: 1px solid #ff2e3a;

  margin: 0 1rem;
`;

export const InsightsTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 80%;
  height: 100%;
`;

export const InsightsTitle = styled.h2`
  color: black;
  font-size: 1.2rem;
`;

export const InsightsData = styled.p`
  color: ${(props) => props.theme.colors.secundary};
  margin-bottom: 0.5rem;
`;

//React Icon Style

export const IconStyles = {
  color: '#ff2e3a',
  fontSize: '2rem',
  marginBottom: '0.2rem'
};
