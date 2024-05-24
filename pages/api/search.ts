import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const searchResults = await fetch('http://localhost:3001/search/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ search: req.body.search }),
  }).then((res) => {
    return res.json();
  });
  //const searchResults = await fetch(
  //  `http://localhost:3001/search/${req.body.search}`
  //).then((res) => {
  //  return res.json();
  //});
  return res.status(200).send(searchResults);
}
