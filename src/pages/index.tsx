import { Container } from '../styles/stylesIndex/styles';

import Header from '../components/Header/index';
import ActiviteDisplay from '../components/ActivityDisplay/index';
import DropDownMenu from '../components/DropDownMenu';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ActiviteDisplay />
    </Container>
  );
};

export default Home;
