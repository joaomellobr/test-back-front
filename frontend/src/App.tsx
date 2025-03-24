import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import SummaryContainer from './containers/SummaryContainer';
import store from './redux/store';
import { theme } from './design-system/theme';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SummaryContainer />
    </ThemeProvider>
  </Provider>
);

export default App;