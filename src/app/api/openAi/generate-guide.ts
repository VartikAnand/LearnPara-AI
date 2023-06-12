// pages/api/generate-guide.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { subject } = req.body;
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `To learn ${subject}, you should cover the following chapters:`,
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    res.status(200).json({ guide: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate guide' });
  }
}
