'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
//import { SuggestIcon } from '@/components/SuggestIcon';
import { fetchSuggestions } from '@/src/fetchHelper';

export default function Search() {
  const router = useRouter();

  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(true);

  const selectionChange = (k: any) => {
    router.push(`/search?q=${k}`);
  };

  const inputChange = async (e: any) => {
    console.log('inputChange:', e.target.value);
    const s = await fetchSuggestions(e.target.value);
    setSuggestions(s.results);
    setShow(true);
  };

  return (
    <form action='/search' method='get' className='relative'>
      <div className='flex-column group inline-flex w-full max-w-xs'>
        <div className='flex w-full flex-col justify-end'>
          <div className='flex h-full flex-col'>
            <div className='inline-flex h-[48px] min-h-12 w-full flex-row items-center gap-3 rounded-full border-medium border-default-500 px-5 shadow-sm transition-colors !duration-150 tap-highlight-transparent transition-background'>
              <div className='box-border inline-flex h-full w-full items-center'>
                <svg
                  aria-hidden='true'
                  fill='none'
                  focusable='false'
                  height='1em'
                  role='presentation'
                  viewBox='0 0 24 24'
                  width='1em'
                  className='text-default-400'
                  strokeWidth='2.5'
                >
                  <path
                    d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></path>
                  <path
                    d='M22 22L20 20'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></path>
                </svg>
                <input
                  onChange={inputChange}
                  className='h-full w-full bg-transparent p-2 text-medium font-normal !outline-none placeholder:text-foreground-500 focus-visible:outline-none'
                  autoComplete='off'
                  placeholder='Search Song or Artist'
                  spellCheck='false'
                  type='text'
                  name='q'
                />
                <div className='-mr-2 flex h-full items-center'>
                  <button
                    className='ease box-border inline-flex h-8 w-8 min-w-8 select-none appearance-none items-center justify-center !gap-0 gap-2 overflow-hidden whitespace-nowrap rounded-full bg-transparent px-0 text-medium font-normal text-default-500 subpixel-antialiased outline-none transition-transform duration-150 motion-reduce:transition-none'
                    type='button'
                    tabIndex={-1}
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      aria-hidden='true'
                      fill='none'
                      focusable='false'
                      height='1em'
                      role='presentation'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width='1em'
                      className={`duration-150 ${suggestions.length > 0 && show ? '' : 'rotate-180'}`}
                    >
                      <path d='m6 9 6 6 6-6'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden'></div>
      </div>
      {suggestions.length > 0 && show && (
        <div className='absolute z-10 w-full rounded-3xl border-medium border-default-500 bg-white py-3'>
          {suggestions.map((s: any) => {
            return (
              <div
                className='cursor-pointer px-1 py-px hover:bg-black/20'
                onClick={() => selectionChange(s)}
              >
                {s}
              </div>
            );
          })}
        </div>
      )}
    </form>
  );
}
