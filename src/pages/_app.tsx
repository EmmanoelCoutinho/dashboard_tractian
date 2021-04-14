import App from 'next/app';

import GlobalStyles from '../styles/globalStyles';

export default class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}
