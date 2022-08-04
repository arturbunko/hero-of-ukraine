import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { purchase_name, email, locale } = req.body;

  const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/site/payment/paypal/initiate`;

  console.log('Start Request:', url, { purchase_name, email, locale });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ purchase_name, email, locale }),
  });

  console.log('End Request:', url);

  const data = await response.json();

  console.log({ data });

  if (response.ok) {
    return res.status(200).json(data);
  }

  return res.status(500).json(data);
}
