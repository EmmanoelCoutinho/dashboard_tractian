import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Oswald', sans-serif;
   
}

body {
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

a,button{
  cursor: pointer;
}

li {
  list-style: none;
}

input:focus, button:focus {
  outline: none;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; /* == 15px */
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%; /* == 14px */
  }
}

.MenuItem{
  color: red;
}
`;

export default GlobalStyles;
