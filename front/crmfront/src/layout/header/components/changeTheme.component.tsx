import { useEffect, useState } from 'react';

const ChangeTheme = () => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const newColor = theme === 'light' ? '#fff' : '#000';
    console.log('NEW KOLOR', newColor);
    root.style.setProperty('--test-color', newColor);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: 'red' }}>
      ZMIEN THEME
    </button>
  );
};

export default ChangeTheme;
