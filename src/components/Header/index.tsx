import React from 'react';

import { Container, ImgLogo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ImgLogo alt="logo" src="images/logo.svg" />
    </Container>
  );
};

export default Header;
