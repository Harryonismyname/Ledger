import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
}  from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTimeframeContext, TimeRange } from './TimeframeContext.tsx'
import { useTransactionsContext, Transaction } from "./TransactionContext.tsx"

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
    const transactionContext = useTransactionsContext();
    const filterDates = (): Transaction[] | undefined => {
        dates.map(date => {
            const filteredTransactions = transactionContext?.value?.filter(transaction => transaction.date == date);

        })
    };
    const filterTransactions = (isIncome : boolean) : number[] | undefined => {
        return transactionData 
            ?.filter(transaction => transaction.amount > 1 && isIncome || transaction.amount < 1 && !isIncome)
            .map(transaction => Math.abs(transaction.amount))
    }


    const dates: string[] = (() => {
        switch (timeframeContext.value) {
            case TimeRange.CurrentMonth:
                return ["February", "March"];
            case TimeRange.ThreeMonths:
                return ["January", "February", "March"];
            case TimeRange.SixMonths:
                return ["October", "November", "December", "January", "February", "March"];
            case TimeRange.NineMonths:
                return ["July", "August", "September", "October", "November", "December", "January", "February", "March"];
            case TimeRange.Year:
                return ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
            default:
                return ["January, February, March"];
        }
    }
    )()

    let transactionData: Transaction[] | undefined;



    const income: number[] | undefined = filterTransactions(true);
    const expenses: number[] | undefined = filterTransactions(false);
    // Dummy Data
    const net: number[] | undefined = income?.map((value, index) =>  value - (expenses ? expenses?.[index] : 0) );
    const data =
    {
    labels: dates,
        datasets: [
            {
                label: "Income",
                data: income,
                backgroundColor: "rgba(50, 99, 255, 0.5)"
            },
            {
                label: "Expenses",
                data: expenses,
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "Net",
                data: net,
                backgroundColor: "rgba(50, 255, 99, 0.5)"
            }
        ],

    }
  return ( <Line data={data}/> );
}

export default ProfitGraph;