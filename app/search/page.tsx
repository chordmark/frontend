'use client'

import { useSearchParams } from 'next/navigation'


export default function Search() {

  const searchParams = useSearchParams()

  const q = searchParams ? searchParams.get('q') : ''

  return (
    <>
      Search: {q}
    </>
  );
}