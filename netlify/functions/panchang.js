export async function handler() {
  const d = new Date();

  return {
    statusCode: 200,
    body: JSON.stringify({
      tithi: d.getDate() % 30,
      vaar: d.toLocaleDateString("en-IN", { weekday: "long" }),
      nakshatra: "Auto"
    })
  };
}
