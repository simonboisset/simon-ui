import * as React from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { FormPage } from './pages/FormPage';
import { ModalPage } from './pages/ModalPage';
import { RouterPage } from './pages/RouterPage';
import { PageRouter, Redirect, SimonProvider, Text, Theme } from './simon-ui';

const theme: Theme = {
  palette: {
    primary: {
      main: '#81c784',
    },
    secondary: {
      main: '#e57373',
    },
  },
  components: {
    drawer: {
      variant: 'persistent',
      z: 'on',
      width: 300,
      position: 'left',
    },
  },
};

function App() {
  return (
    <SimonProvider theme={theme}>
      <PageRouter
        header={<Header />}
        drawer={<NavBar />}
        routes={[
          {
            path: '/',
            exact: true,
            component: <Text variant="h3">Simon UI</Text>,
            routes: [
              { path: '/redirect', component: <Redirect to="/" /> },
              { path: '/form', component: <FormPage /> },
              { path: '/router', component: <RouterPage /> },
              { path: '/modal', component: <ModalPage /> },
              { path: '/menu', component: <RouterPage /> },
              { path: '/router', component: <RouterPage /> },
            ],
          },
        ]}
      />
    </SimonProvider>
  );
}
export default App;
