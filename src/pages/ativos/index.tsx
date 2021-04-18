import Head from 'next/head';

import Header from '../../components/Header/index';
import NavBar from '../../components/NavBar';

import { Container, MainContainer, MainContainerInner } from '../../styles/stylesAtivos/styles';

const Assets: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard - Tractian</title>
      </Head>
      <Header />
      <NavBar />
      <MainContainer>
        <MainContainerInner>Salve</MainContainerInner>
      </MainContainer>
    </Container>
  );
};

export default Assets;
