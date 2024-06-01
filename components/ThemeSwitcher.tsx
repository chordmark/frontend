'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      defaultSelected={theme === 'light'}
      size='lg'
      color='success'
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
    // <div>
    //   The current theme is: {theme}
    //   <button onClick={() => setTheme('light')}>Light Mode</button>
    //   <button onClick={() => setTheme('dark')}>Dark Mode</button>
    // </div>
  );
}
