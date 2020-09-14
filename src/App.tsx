import React from 'react';
import {ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';
import Header from './Components/Header';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light); 

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ?  dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header toggleTheme={toggleTheme}/>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
