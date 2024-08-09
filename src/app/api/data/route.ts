// src/app/api/data/route.ts
export async function GET() {
  const data = {
    lineChartData: {
      labels: ["January", "February", "March", "April", "May", "June"],
      values: [65, 59, 80, 81, 56, 55, 40],
    },
    barChartData: {
      labels: ["January", "February", "March", "April", "May", "June"],
      values: [28, 48, 40, 19, 86, 27, 90],
    },
    tableData: [
      { id: 1, name: "Item 1", value: 100 },
      { id: 2, name: "Item 2", value: 200 },
      { id: 3, name: "Item 3", value: 300 },
    ],
  };
  return new Response(JSON.stringify(data), { status: 200 });
}
