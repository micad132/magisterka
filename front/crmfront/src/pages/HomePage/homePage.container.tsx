import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/consts.ts';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
  background-color: brown;
`;

const HomePage = () => {
  useEffect(() => {
    const test = async () => {
      const cosik = await axios.get(`${API_URL}/user/getLoggedUser`);
      console.log('DANE', cosik);
    };
    test();
  }, []);
  return (
    <div>
      <HomePageHeader>System CRM zawiera</HomePageHeader>
    </div>
  );
};

export default HomePage;
