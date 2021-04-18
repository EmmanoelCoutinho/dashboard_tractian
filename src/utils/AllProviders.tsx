//to solve the provider hell ^^
import { ApiProvider } from '../contexts/apiContexts';
import { FiltredProvider } from '../contexts/filtredContext';
import { ThemeProvider } from 'styled-components';

const composeProviders = (...providers) => (props) =>
  providers.reduceRight(
    (children, Provider) => <Provider {...props}>{children}</Provider>,
    props.children
  );

export const AllProviders = composeProviders(ThemeProvider, ApiProvider, FiltredProvider);
