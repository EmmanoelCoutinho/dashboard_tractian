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
import StatusDisplay from '../components/StatusDisplay/index';
import HealthDisplay from '../components/HealthDisplay/index';
import DropDownMenu from '../components/DropDownMenu';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
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
