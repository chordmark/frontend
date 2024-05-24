import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';

import Image from 'next/image.js';
import Link from 'next/link';

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href='/' className='flex items-center'>
          <Image
            src='/chordmark.png'
            height='48'
            width='48'
            alt='ChordMark Logo'
            className='rounded-lg'
            priority={true}
          />
          <p className='font-bold text-inherit'>CHORDMARK</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className='flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Set Lists
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
