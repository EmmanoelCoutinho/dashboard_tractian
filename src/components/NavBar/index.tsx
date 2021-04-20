import { useState, useContext, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { FiGrid } from 'react-icons/fi';
import { AiOutlineRocket } from 'react-icons/ai';

import { adminContext } from '../../contexts/adminContext';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, ActiveButtonLink, RegularButtonLink, ButtonTitle } from './styles';

const StyledFormControl = withStyles({
  root: {
    margin: ' 0 1rem',
    minWidth: 100,
    color: 'white'
  }
})(FormControl);

const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  const key = 'currentProfile';

  const { dataUsers, GetUnicUser } = useContext(adminContext);
  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    GetUnicUser(profileData);
    localStorage.setItem(key, JSON.stringify(profileData));
  }, [profileData]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProfileData(event.target.value as string);
  };

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
      {path === '/ativos' ? (
        <StyledFormControl>
          <InputLabel>Seu usuário</InputLabel>
          <Select
            labelId="select-the-companie"
            id="select-companies"
            value={profileData}
            onChange={handleChange}>
            {dataUsers.map((data) => (
              <MenuItem value={data.id} key={data.email}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      ) : null}
    </Container>
  );
};

export default NavBar;
