'use client';

import { useContext, useState } from 'react';
import signIn from '@/src/firebase/auth/signin';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import { AuthContext } from '@/components/context/AuthContext';

import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
} from '@/components/icons/EyeSlashIcon';

export function Login({ loginType }: { loginType: string }) {
  const { googleSignIn } = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push('/');
  };
  return (
    <div className='mt-[60px] flex flex-col items-center gap-2'>
      <div className='rounded-lg border-1 border-black p-2'>
        <div className='mb-2 text-lg font-bold'>Sign {loginType}</div>
        <form onSubmit={handleForm} className='form'>
          <Input
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            name='email'
            id='email'
            placeholder='example@mail.com'
            className='my-1'
          />
          <Input
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
            type={isVisible ? 'text' : 'password'}
            name='password'
            id='password'
            placeholder='Enter your password'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className='pointer-events-none text-2xl text-default-400' />
                ) : (
                  <EyeFilledIcon className='pointer-events-none text-2xl text-default-400' />
                )}
              </button>
            }
            className='my-1'
          />
          <Button type='submit' className='my-1' color='primary'>
            Sign {loginType}
          </Button>
        </form>
      </div>
      <a onClick={() => googleSignIn()}>
        <img
          src={`/auth/google_sign_${loginType.toLowerCase()}_light.svg`}
          className='cursor-pointer'
        />
      </a>
    </div>
  );
}
