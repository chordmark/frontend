'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { SuggestIcon } from '@/components/SuggestIcon';
import { fetchSuggestions } from '@/src/fetchHelper';

export default function Search() {
  const router = useRouter();

  const [suggestions, setSuggestions] = useState([]);

  const selectionChange = (k: any) => {
    console.log('selectionChange:', k);
    //router.push(`/search?q=${k}`);
  };

  const inputChange = async (i: string) => {
    console.log('inputChange:', i);
    const s = await fetchSuggestions(i);
    setSuggestions(s.results);
  };

  return (
    <form action='/search' method='get'>
      <Autocomplete
        name='q'
        onSelectionChange={selectionChange}
        onInputChange={inputChange}
        size='lg'
        classNames={{
          base: 'max-w-xs',
          listboxWrapper: 'max-h-[320px]',
          selectorButton: 'text-default-500',
        }}
        menuTrigger='input'
        items={suggestions}
        inputProps={{
          classNames: {
            input: 'p-2',
            inputWrapper: 'h-[48px]',
          },
        }}
        listboxProps={{
          hideSelectedIcon: true,
          itemClasses: {
            base: [
              'rounded-medium',
              'text-default-500',
              'transition-opacity',
              'data-[hover=true]:text-foreground',
              'dark:data-[hover=true]:bg-default-50',
              'data-[pressed=true]:opacity-70',
              'data-[hover=true]:bg-default-200',
              'data-[selectable=true]:focus:bg-default-100',
              'data-[focus-visible=true]:ring-default-500',
            ],
          },
        }}
        aria-label='Search Song or Artist'
        placeholder='Search Song or Artist'
        popoverProps={{
          offset: 10,
          classNames: {
            base: 'rounded-large',
            content: 'p-1 border-small border-default-100 bg-background',
          },
        }}
        startContent={
          <SuggestIcon
            className='text-default-400'
            strokeWidth={2.5}
            size={20}
          />
        }
        endContent={
          <button className='rounded-full bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700'>
            Search
          </button>
        }
        radius='full'
        variant='bordered'
      >
        {suggestions.map((suggest) => (
          <AutocompleteItem key={suggest} textValue={suggest}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='flex flex-col'>
                  <span>{suggest}</span>
                </div>
              </div>
            </div>
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </form>
  );
}
