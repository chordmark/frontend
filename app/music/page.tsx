'use client';

import { fetchMusic } from '@/src/fetchHelper';
import { FetchMap } from '@/src/types';
import { Spinner } from '@nextui-org/spinner';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Music() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState();

  const q = searchParams ? searchParams.get('q') : '';
  const fetchMap: FetchMap = {};

  useEffect(() => {
    if (!q || q.length === 0) return;
    if (!fetchMap[q]) {
      fetchMap[q] = fetchMusic(q).then((sr: any) => {
        if (sr.music === q) {
          setResult(sr.result);
          setIsLoading(false);
        }
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner label='Loading...' />
      ) : (
        <pre
          className='m-10 font-mono'
          dangerouslySetInnerHTML={{ __html: `${result}` }}
        />
      )}
    </>
  );
}
