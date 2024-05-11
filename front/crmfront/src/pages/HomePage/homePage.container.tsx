import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import {
  fetchAllUsersThunk, fetchUserDetailsThunk, getAllUsers, getUserDetails,
} from '../../store/userSlice.tsx';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
  background-color: brown;
`;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const userDetails = useAppSelector(getUserDetails);
  const allUsers = useAppSelector(getAllUsers);
  useEffect(() => {
    if (userDetails.username === '') {
      dispatch(fetchUserDetailsThunk());
    } else if (allUsers.length === 0) {
      dispatch(fetchAllUsersThunk());
    }
  }, []);
  return (
    <div>
      <HomePageHeader>System CRM zawiera</HomePageHeader>
    </div>
  );
};

export default HomePage;
