import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100%;

  background-color: ${(props) => props.theme.colors.tertiaty};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100%;
`;

export const MainContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

  height: 90vh;
  width: 94%;

  background-color: ${(props) => props.theme.colors.background};
  margin: 0.8rem 0;
`;

export const Instruction = styled.div`
  width: 80%;
  margin-top: 1.5rem;
`;

export const InstructionText = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secundary};
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 3.2rem;

  margin: 1rem 0;
`;

export const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96%;
  height: 100%;

  padding: 0.5rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 12rem;
`;

export const AssetsImage = styled.img`
  max-width: 15rem;
  width: auto;
  max-height: 12rem;
  height: auto;

  border-radius: 5px;
`;

export const AssetsInfoContainer = styled.div`
  width: 90%;
  height: 100%;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.tertiaty};
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const ContainerNameSensor = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 5rem;

  padding: 0 0.6rem;
`;

export const AssetName = styled.h2`
  font-size: 1.8rem;
`;

export const SensorsNames = styled.p`
  font-size: 1.2rem;
`;

export const AssetsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  height: 85%;

  margin: 0 auto;
  padding: 0.5rem 0.6rem;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
`;
