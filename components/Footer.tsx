import { ThemeSwitcher } from './ThemeSwitcher';

export default function Lists() {
  return (
    <footer className='flex w-full flex-col items-center justify-center py-5'>
      <ThemeSwitcher />
      <p className='p-2 text-tiny text-default-400 md:text-start'>
        © 2024 ChordMark All rights reserved.
      </p>
    </footer>
  );
}
