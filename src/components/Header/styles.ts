import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.secundary};

  padding: 0 0.5rem;
`;

export const ImgLogo = styled.img`
  max-width: 10rem;
  width: auto;
`;

export const Profile = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: inherit;
  border: none;

  width: 8rem;
  height: 100%;

  padding-right: 0.5rem;
`;

export const UserImage = styled.img`
  max-width: 2.2rem;
  width: auto;

  border-radius: 50%;
`;

export const UserName = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.4rem;
`;
