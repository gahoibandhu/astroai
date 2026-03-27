export async function handler(event) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const { message } = JSON.parse(event.body || "{}");

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message || "Hello" }] }]
        })
      }
    );

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response"
      })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
}
