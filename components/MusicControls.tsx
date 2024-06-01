'use client';

import {
  PauseCircleIcon,
  PlayIcon,
  ArrowUpOnSquareIcon,
} from '@heroicons/react/16/solid';
import { useEffect, useRef, useState } from 'react';

export default function MusicControls() {
  const [playing, setPlaying] = useState(false);

  const scrollInterval = useRef(setInterval(() => {}, 100000));

  const scroll = (speed: number) => {
    window.scrollBy({
      top: speed,
      left: 0,
      behavior: 'smooth',
    });
  };

  const saveSong = () => {
    console.log('save');
  };

  useEffect(() => {
    if (playing) {
      scrollInterval.current = setInterval(() => scroll(2), 100);
    } else {
      clearInterval(scrollInterval.current);
    }
  }, [playing]);

  return (
    <div className='flex items-center gap-2'>
      <ArrowUpOnSquareIcon
        width={30}
        height={30}
        className='cursor-pointer'
        onClick={() => saveSong()}
      />
      {playing ? (
        <PauseCircleIcon
          width={30}
          height={30}
          className='cursor-pointer'
          onClick={() => setPlaying(false)}
        />
      ) : (
        <PlayIcon
          width={30}
          height={30}
          onClick={() => setPlaying(true)}
          className='cursor-pointer'
        />
      )}
    </div>
  );
}
