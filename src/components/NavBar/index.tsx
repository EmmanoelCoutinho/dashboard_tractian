import { Container, ActiveButtonLink, RegularButtonLink, ButtonTitle } from './styles';

import { FiGrid } from 'react-icons/fi';
import { AiOutlineRocket } from 'react-icons/ai';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Container>
      <Link href="/">
        {path === '/' ? (
          <ActiveButtonLink>
            <ButtonTitle>
              <FiGrid style={{ marginRight: '0.2rem' }} />
              Visão Geral
            </ButtonTitle>
          </ActiveButtonLink>
        ) : (
          <RegularButtonLink>
            <ButtonTitle>
              <FiGrid style={{ marginRight: '0.2rem' }} />
              Visão Geral
            </ButtonTitle>
          </RegularButtonLink>
        )}
      </Link>
      <Link href="/ativos">
        {path === '/ativos' ? (
          <ActiveButtonLink>
            <ButtonTitle>
              <AiOutlineRocket style={{ marginRight: '0.2rem', fontSize: '1.2rem' }} />
              Ativos
            </ButtonTitle>
          </ActiveButtonLink>
        ) : (
          <RegularButtonLink>
            <ButtonTitle>
              <AiOutlineRocket style={{ marginRight: '0.2rem', fontSize: '1.2rem' }} />
              Ativos
            </ButtonTitle>
          </RegularButtonLink>
        )}
      </Link>
    </Container>
  );
};

export default NavBar;
