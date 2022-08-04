import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { purchase_name, order_id } = req.body;

  const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/site/payment/paypal/verify`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ purchase_name, order_id }),
  });

  const data = await response.text();

  if (response.ok) {
    return res.status(200).json(data);
  }

  return res.status(500).json(data);
}
