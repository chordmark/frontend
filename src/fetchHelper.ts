'use client';

export async function fetchSuggestions(i: string) {
  if (i.length === 0) {
    return Promise.resolve({ results: [] });
  }
  return fetch('/api/suggest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ suggest: i }),
  }).then((res) => {
    return res.json();
  });
}

export async function fetchSearch(i: string) {
  if (i.length === 0) {
    return Promise.resolve({ results: [] });
  }
  return fetch('/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ search: i }),
  }).then((res) => {
    return res.json();
  });
}

export async function fetchMusic(i: string) {
  if (i.length === 0) {
    return Promise.resolve({ results: [] });
  }
  return fetch('/api/music', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ music: i }),
  }).then((res) => {
    return res.json();
  });
}
