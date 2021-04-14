import App from 'next/app';

import GlobalStyles from '../styles/globalStyles';

//themes and provider for switch the theme
import { light } from '../styles/themes/light';
import { ThemeProvider } from 'styled-components';

export default class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
