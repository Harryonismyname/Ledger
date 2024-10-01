import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
}  from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useTimeframeContext, TimeRange} from './TimeframeContext.tsx'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

function ProfitGraph() {

    /*
        How to consolidate arrays:
        - Request All Transactions within Specified Period (e.g. Month, 3 Months, 6 Months, Year, YTD)
        - Sort Transactions by balance value (0 > value == Income)
        - Assign Values
        
        Data Format:
        Dates: string[]
        IncomeData: double[]
        ExpenseData: double[]
    */

    const timeframeContext = useTimeframeContext();

    const dates: string[] = (() => {
        // Probably have to extract this switch statement so that all requests are filtered through it...
        // v In here we'll add a filter that will be used when we make the db request
        switch (timeframeContext.value) {
            case TimeRange.CurrentMonth:
                return ["February", "March"];
            case TimeRange.ThreeMonths:
                return ["January", "February", "March"];
            case TimeRange.SixMonths:
                return ["October", "November", "December", "January", "February", "March"];
            case TimeRange.NineMonths:
                return ["June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
            case TimeRange.Year:
                return ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
            default:
                return ["January, February, March"];
        }
    }
    )()

    // V Add DB Request Here V

    const data =
    {
    labels: dates,
        datasets: [
            {
                label: "Income",
                data: [5, 6, 7],
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "Expenses",
                data: [8, 9, 10],
                backgroundColor: "rgba(50, 99, 255, 0.5)"
            }
        ],

    }
  return ( <Line data={data}/> );
}

export default ProfitGraph;