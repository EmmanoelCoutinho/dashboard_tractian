import React, { useContext } from 'react';

//material ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ThemeContext } from 'styled-components';

import { Container, ImgLogo, Profile, UserImage, UserName } from './styles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //styling the MenuItem of Material UI
  const StyledMenuItem = withStyles({
    root: {
      background: colors.secundary,
      width: '90%',
      margin: '0 auto'
    }
  })(MenuItem);

  return (
    <>
      <Container>
        <ImgLogo alt="logo" src="images/logo.svg" />
        <Profile aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <UserImage src="images/users.png" />
          <UserName>Gandalf</UserName>
        </Profile>
      </Container>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        color={'black'}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <StyledMenuItem onClick={handleClose}>
          <Profile>
            <UserImage src="images/users.png" />
            <UserName>Gandalf</UserName>
          </Profile>
        </StyledMenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
