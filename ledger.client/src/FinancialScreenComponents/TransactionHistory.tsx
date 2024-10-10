import {  Table, Container } from 'react-bootstrap';
import { TimeRange, useTimeframeContext } from './TimeframeContext.tsx'
import { useTransactionsContext, Transaction } from "./TransactionContext.tsx"
function TransactionHistory() {
    const timeframeContext = useTimeframeContext();
    const transactionContext = useTransactionsContext();
    const dates: Transaction[] | undefined = (() => {
        const filterDates = (dateRange: string[]): Transaction[] | undefined => {
            return transactionContext.value?.filter(transaction => dateRange.some(param => param == transaction.date))
        };
        switch (timeframeContext.value) {
            case TimeRange.CurrentMonth:
                return filterDates(["February", "March"]);
            case TimeRange.ThreeMonths:
                return filterDates(["January", "February", "March"]);
            case TimeRange.SixMonths:
                return filterDates(["October", "November", "December", "January", "February", "March"]);
            case TimeRange.NineMonths:
                return filterDates(["June", "July", "August", "September", "October", "November", "December", "January", "February", "March"]);
            case TimeRange.Year:
                return filterDates(["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"]);
            default:
                return filterDates(["January, February, March"]);
        }
    }
    )()

    const content = (
        <Container fluid>
            <h3>Transaction History:</h3>
            <div style={{ height: '300px', overflow: 'auto' }}>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th scope="col">Units</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates?.map((item, index) => (
                            <tr>
                                <td key={index}>{item.date}</td>
                                <td>{ item.product }</td>
                                <td>{ item.units }</td>
                                <td>{ item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )

  return ( content );
}

export default TransactionHistory;