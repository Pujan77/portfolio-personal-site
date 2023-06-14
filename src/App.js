import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navs } from './layout';
import { routingItems } from './content/content';
import './App.css';
import { ErrorProvider } from './ErrorWrapper';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navs />}>
              {routingItems.map(nav => (
                <Route
                  key={nav.title}
                  path={nav.to}
                  exact={nav.exact}
                  element={nav.component}
                />
              ))}
            </Route>
          </Routes>{' '}
        </BrowserRouter>{' '}
      </ErrorProvider>
    </ChakraProvider>
  );
}

export default App;
