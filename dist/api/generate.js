// This is a Vercel Serverless Function that acts as a secure proxy to the Gemini API.

export default async function handler(request, response) {
  // 1. We only allow POST requests to this function.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Get the prompt from the request body sent by the browser.
  const { prompt } = request.body;

  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }
  
  // 3. Get the secret API key from Vercel's Environment Variables.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
     return response.status(500).json({ error: 'API key is not configured.' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  // 4. Construct the payload to send to the Gemini API.
  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
    }
  };

  // 5. Make the secure, server-to-server API call to Gemini.
  try {
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API Error:', errorText);
      return response.status(geminiResponse.status).json({ error: `Gemini API error: ${errorText}` });
    }

    const data = await geminiResponse.json();
    
    // 6. Send the response from Gemini back to the browser.
    response.status(200).json(data);

  } catch (error) {
    console.error('Internal Server Error:', error);
    response.status(500).json({ error: 'Failed to fetch from Gemini API' });
  }
}
