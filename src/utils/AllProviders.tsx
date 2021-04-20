//to solve the provider hell ^^
import { ThemeProvider } from 'styled-components';
import { ApiProvider } from '../contexts/apiContexts';
import { FiltredProvider } from '../contexts/filtredContext';
import { adminProvider } from '../contexts/adminContext';
import { insightsProvider } from '../contexts/insightContext';

const composeProviders = (...providers) => (props) =>
  providers.reduceRight(
    (children, Provider) => <Provider {...props}>{children}</Provider>,
    props.children
  );

export const AllProviders = composeProviders(
  ThemeProvider,
  ApiProvider,
  FiltredProvider,
  adminProvider,
  insightsProvider
);
