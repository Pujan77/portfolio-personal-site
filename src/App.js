import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navs } from './layout';
import { routingItems } from './content/content';
function App() {
  return (
    <ChakraProvider theme={theme}>
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
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
