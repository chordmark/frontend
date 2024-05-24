import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  console.log(`api:${req.body.suggest}:`);
  const suggestions = await fetch('http://localhost:3001/suggestion/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ suggest: req.body.suggest }),
  }).then((res) => {
    return res.json();
  });
  return res.status(200).send(suggestions);
}
