"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

// This is a Vercel Serverless Function that acts as a secure proxy to the Gemini API.
function handler(request, response) {
  var prompt, apiKey, apiUrl, payload, geminiResponse, errorText, data;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(request.method !== 'POST')) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", response.status(405).json({
            message: 'Method Not Allowed'
          }));

        case 2:
          // 2. Get the prompt from the request body sent by the browser.
          prompt = request.body.prompt;

          if (prompt) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", response.status(400).json({
            error: 'Prompt is required'
          }));

        case 5:
          // 3. Get the secret API key from Vercel's Environment Variables.
          apiKey = process.env.GEMINI_API_KEY;

          if (apiKey) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", response.status(500).json({
            error: 'API key is not configured.'
          }));

        case 8:
          apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat(apiKey); // 4. Construct the payload to send to the Gemini API.

          payload = {
            contents: [{
              role: "user",
              parts: [{
                text: prompt
              }]
            }],
            generationConfig: {
              responseMimeType: "application/json"
            }
          }; // 5. Make the secure, server-to-server API call to Gemini.

          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap(fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }));

        case 13:
          geminiResponse = _context.sent;

          if (geminiResponse.ok) {
            _context.next = 20;
            break;
          }

          _context.next = 17;
          return regeneratorRuntime.awrap(geminiResponse.text());

        case 17:
          errorText = _context.sent;
          console.error('Gemini API Error:', errorText);
          return _context.abrupt("return", response.status(geminiResponse.status).json({
            error: "Gemini API error: ".concat(errorText)
          }));

        case 20:
          _context.next = 22;
          return regeneratorRuntime.awrap(geminiResponse.json());

        case 22:
          data = _context.sent;
          // 6. Send the response from Gemini back to the browser.
          response.status(200).json(data);
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](10);
          console.error('Internal Server Error:', _context.t0);
          response.status(500).json({
            error: 'Failed to fetch from Gemini API'
          });

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 26]]);
}
//# sourceMappingURL=generate.dev.js.map
