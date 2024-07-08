import { createContext } from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
