'use client';

export async function fetchSuggestions(i: string) {
    console.log('input changed')
    if (i.length === 0) {
      return []
    }
    return fetch('/api/suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ suggest: i }),
    })
      .then((res) => {
        return res.json();
      })
  };