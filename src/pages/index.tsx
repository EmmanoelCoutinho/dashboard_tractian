import Head from 'next/head';

import {
  Container,
  ContainerBody,
  ContainerBodyLeft,
  ContainerInnerLeft,
  ContainerInnerRight,
  ContainerBodyRight,
  Title
} from '../styles/stylesIndex/styles';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import StatusDisplay from '../components/StatusDisplay/index';
import HealthDisplay from '../components/HealthDisplay/index';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard - Tractian</title>
      </Head>
      <Header />
      <NavBar />
      <ContainerBody>
        <ContainerBodyLeft>
          <ContainerInnerLeft>
            <StatusDisplay />
          </ContainerInnerLeft>
        </ContainerBodyLeft>
        <ContainerBodyRight>
          <ContainerInnerRight>
            <Title>Saúde dos ativos</Title>
            <HealthDisplay />
          </ContainerInnerRight>
        </ContainerBodyRight>
      </ContainerBody>
    </Container>
  );
};

export default Home;
