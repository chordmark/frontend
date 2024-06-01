'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';

import Image from 'next/image.js';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/components/context/AuthContext';

export default function Nav() {
  const { user, logout, isLoading } = useContext(AuthContext);

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
          <p className='ml-1 font-bold text-inherit'>CHORDMARK</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className='flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/saved'>
            Saved
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {!isLoading && user !== null && (
          <NavbarItem className='flex'>
            <Button
              as={Button}
              color='primary'
              onPress={(e) => logout()}
              variant='flat'
            >
              Sign Out
            </Button>
          </NavbarItem>
        )}
        {!isLoading && user === null && (
          <>
            <NavbarItem className='flex'>
              <Button as={Link} color='primary' href='/signin' variant='flat'>
                Sign In
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color='primary' href='/signup' variant='flat'>
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
