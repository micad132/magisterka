import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import LayoutContainer from './layout/layout.container.tsx';
import routes from './routes';

axios.defaults.withCredentials = true;

const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    color: #fff;
`;

const App = () => (
  <AppWrapper>
    <LayoutContainer>
      {routes}
    </LayoutContainer>
  </AppWrapper>
);

export default App;
