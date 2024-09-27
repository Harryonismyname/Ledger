import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
}  from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export const data = {
    labels: ["January", "February", "March"],
        datasets: [
            {
                label: "Income",
                data: [5, 6, 7],
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "Expenses",
                data: [8, 9, 10],
                backgroundColor: "rgba(50, 99, 132, 0.5)"
            }
        ],

}

function ProfitGraph() {
  return (
      <Line data={data}/>
  );
}

export default ProfitGraph;