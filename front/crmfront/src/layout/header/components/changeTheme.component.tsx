import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const CustomDiv = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: var(--font-color);
`;

const ChangeTheme = () => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const newColor = theme === 'light' ? '#fff' : '#000';
    const fontColor = theme === 'light' ? '#000' : '#fff';
    root.style.setProperty('--background-color', newColor);
    root.style.setProperty('--font-color', fontColor);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const properIcon = theme === 'light'
    ? <MoonIcon boxSize="100%" />
    : <SunIcon boxSize="100%" />;

  return (
    <CustomDiv onClick={toggleTheme}>
      {properIcon}
    </CustomDiv>
  );
};

export default ChangeTheme;
