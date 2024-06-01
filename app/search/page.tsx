'use client';

import { v4 as uuidv4 } from 'uuid';

import { fetchSearch } from '@/src/fetchHelper';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table';
import { Spinner } from '@nextui-org/spinner';
import { FetchMap } from '@/src/types';

export default function Search() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);

  const q = searchParams ? searchParams.get('q') : '';

  const fetchMap: FetchMap = {};

  useEffect(() => {
    if (!q || q.length === 0) return;
    if (!fetchMap[q]) {
      fetchMap[q] = fetchSearch(q).then((sr: any) => {
        if (sr.search === q) {
          setResults(sr.results);
          setIsLoading(false);
        }
      });
    }
  }, []);

  const columns = [
    {
      key: 'artist',
      label: 'ARTIST',
    },
    {
      key: 'song',
      label: 'SONG',
    },
    {
      key: 'type',
      label: 'TYPE',
    },
  ];

  return (
    <>
      <Table aria-label='Search Results'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={results}
          isLoading={isLoading}
          loadingContent={<Spinner label='Loading...' />}
        >
          {(result) => (
            <TableRow
              key={uuidv4()}
              className='cursor-pointer hover:bg-black/20'
              onClick={(e) => {
                router.push(
                  `/music?q=${encodeURI(getKeyValue(result, 'shortId'))}`
                );
              }}
            >
              {(columnKey) => (
                <TableCell>{getKeyValue(result, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
