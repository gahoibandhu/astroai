export async function handler(event) {
  const { index } = JSON.parse(event.body || "{}");

  const grid = "श्रीरामजयरामजयजयराम".repeat(15);

  let result = "";
  let i = index || 0;

  for (let k = 0; k < 15; k++) {
    result += grid[i % grid.length];
    i = (i + 9) % grid.length;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ result })
  };
}
