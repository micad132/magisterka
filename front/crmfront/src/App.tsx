import './App.css';
import styled from 'styled-components';
import LayoutContainer from './layout/layout.container.tsx';
import routes from './routes';

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
