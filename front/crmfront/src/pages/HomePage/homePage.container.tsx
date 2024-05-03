import styled from 'styled-components';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
  background-color: brown;
`;

const HomePage = () => (
  <div>
    <HomePageHeader>System CRM zawiera</HomePageHeader>
  </div>
);

export default HomePage;
