import { useCallback, useContext, useEffect, useState } from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Insights from '../../components/Insights';

import { adminContext } from '../../contexts/adminContext';
import { apiContext } from '../../contexts/apiContexts';

import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  Container,
  MainContainer,
  MainContainerInner,
  ImageContainer,
  SelectContainer,
  AssetsImage,
  AssetsInfoContainer,
  AssetContainer,
  AssetName,
  AssetsInfo,
  InfoText,
  ContainerNameSensor,
  SensorsNames,
  Instruction,
  InstructionText
} from '../../styles/stylesAtivos/styles';

const StyledFormControl = withStyles({
  root: {
    margin: '0 0.2rem 1rem',
    fontSize: '0.8rem',
    width: '100%',
    minWidth: 100
  }
})(FormControl);

const Assets: React.FC = () => {
  const {
    dataCompanies,
    dataUnits,
    dataUnicAsset,
    FilterAssets,
    GetUnicAsset,
    dataUnicUser
  } = useContext(adminContext);
  const { dataAssets } = useContext(apiContext);

  const [currentCompany, setCurrentCompany] = useState('');
  const [currentUnit, setCurrentUnit] = useState('');
  const [currentFiltredAssets, setCurrentFiltredAssets] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentCompany(event.target.value as string);
    setCurrentUnit(event.target.value as string);
  }, []);

  useEffect(() => {
    GetUnicAsset(currentFiltredAssets);
  }, [currentFiltredAssets]);

  return (
    <Container>
      <Head>
        <title>Dashboard - Tractian</title>
      </Head>
      <Header />
      <NavBar />
      <MainContainer>
        <MainContainerInner>
          <SelectContainer>
            <StyledFormControl>
              <InputLabel>Companhias</InputLabel>
              <Select
                labelId="select-the-companie"
                id="select-companies"
                value={currentCompany}
                onChange={handleChange}>
                {dataCompanies.map((data: any) => (
                  <MenuItem value={data.id} key={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Unidades</InputLabel>
              <Select
                labelId="select-the-companie"
                id="select-companies"
                value={currentUnit}
                onChange={handleChange}>
                {dataUnits.map((data: any) => (
                  <MenuItem value={data.id} key={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Ativos</InputLabel>
              <Select
                labelId="select-the-companie"
                id="select-companies"
                value={currentFiltredAssets}
                onChange={(event) => {
                  setCurrentFiltredAssets(event.target.value as string);
                }}>
                {FilterAssets().map((data: any) => (
                  <MenuItem value={data.id} key={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </SelectContainer>
          {currentFiltredAssets === '' ? (
            <Instruction>
              <InstructionText>
                Ola! 😊
                <br />
                Para visualizar os seus ativos por favor selecione um usuário acima e após isto um
                dos ativos, que ele será carregado logo após!
              </InstructionText>
            </Instruction>
          ) : (
            <AssetContainer>
              <ImageContainer>
                <AssetsImage src={dataUnicAsset.image} alt="assets-images" />
              </ImageContainer>
              <AssetsInfoContainer>
                <ContainerNameSensor>
                  <AssetName>{dataUnicAsset.name}</AssetName>
                  {dataUnicAsset.sensors.map((data: string) => (
                    <SensorsNames key={data}>{data}</SensorsNames>
                  ))}
                </ContainerNameSensor>
                <AssetsInfo>
                  <InfoText>Modelo: {dataUnicAsset.model}</InfoText>
                  <InfoText>Status de Operação: {dataUnicAsset.status}</InfoText>
                  <InfoText>Saúde: {dataUnicAsset.healthscore}%</InfoText>
                  <InfoText>Temperatura max: {dataUnicAsset.specifications.maxTemp}°C</InfoText>
                  <InfoText>
                    Total de coletas ligada: {dataUnicAsset.metrics.totalCollectsUptime}
                  </InfoText>
                  <InfoText>
                    Horas de coleta: {dataUnicAsset.metrics.totalUptime.toFixed(1)}
                  </InfoText>
                  <InfoText>Data da ultima coleta: {dataUnicAsset.metrics.lastUptimeAt}</InfoText>
                </AssetsInfo>
              </AssetsInfoContainer>
            </AssetContainer>
          )}
        </MainContainerInner>
        <Insights />
      </MainContainer>
    </Container>
  );
};

export default Assets;
