import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks.ts';
import { fetchUserDetailsThunk } from '../../store/userSlice.tsx';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
  background-color: brown;
`;

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserDetailsThunk());
  }, []);
  return (
    <div>
      <HomePageHeader>System CRM zawiera</HomePageHeader>
    </div>
  );
};

export default HomePage;
