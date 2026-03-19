import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, interest } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Email invalide.' });
  }

  const validInterests = ['tout', 'saveurs', 'style237', 'art', 'box'];
  const safeInterest = validInterests.includes(interest) ? interest : 'tout';

  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!sheetId || !apiKey) {
      console.error('Google Sheets credentials not configured');
      // In development, just log the submission
      console.log('Waitlist submission:', { email, interest: safeInterest, date: new Date().toISOString() });
      return res.status(200).json({ success: true, message: 'Inscription enregistree.' });
    }

    // Append to Google Sheets via API
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:C:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        values: [[email, safeInterest, new Date().toISOString()]],
      }),
    });

    if (!response.ok) {
      console.error('Google Sheets API error:', await response.text());
      return res.status(500).json({ error: 'Erreur serveur. Reessayez plus tard.' });
    }

    return res.status(200).json({ success: true, message: 'Inscription enregistree.' });
  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({ error: 'Erreur serveur. Reessayez plus tard.' });
  }
}
