import { NextApiRequest, NextApiResponse } from 'next';
import { NAV_ITEMS } from '@/lib/data';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  // Fetch alerts from database
  const alerts = [];
  response.status(200).json(alerts);
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  // Add alert to database
  const alert = request.body;
  response.status(201).json(alert);
}