import App from 'next/app';

import GlobalStyles from '../styles/globalStyles';

//providers import
import { AllProviders } from '../utils/AllProviders';

//themes and provider for switch the theme
import { light } from '../styles/themes/light';

export default class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AllProviders theme={light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </AllProviders>
    );
  }
}
