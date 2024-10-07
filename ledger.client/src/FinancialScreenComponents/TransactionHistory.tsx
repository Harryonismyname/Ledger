import {  Table, Container } from 'react-bootstrap';
import { TimeRange, useTimeframeContext } from './TimeframeContext.tsx'
function TransactionHistory() {
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
                        {dates.map((item, index) => (
                            <tr>
                                <td key={index}>{item}</td>
                                <td>Wood</td>
                                <td>50</td>
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