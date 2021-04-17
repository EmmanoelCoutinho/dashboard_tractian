import {
  Container,
  ContainerBody,
  ContainerBodyLeft,
  ContainerInnerLeft,
  ContainerInnerRight,
  ContainerBodyRight
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
            <HealthDisplay />
          </ContainerInnerRight>
        </ContainerBodyRight>
      </ContainerBody>
    </Container>
  );
};

export default Home;
