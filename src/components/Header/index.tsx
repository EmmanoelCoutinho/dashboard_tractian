import React from 'react';

import { Container, ImgLogo, Profile, UserImage, UserName } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ImgLogo alt="logo" src="images/logo.svg" />
      <Profile>
        <UserImage src="images/users.png" />
        <UserName>Gandalf</UserName>
      </Profile>
    </Container>
  );
};

export default Header;
