import { Table, Container } from "react-bootstrap";
import { useTimeframeContext, TimeRange } from "./TimeframeContext";
import Batch from "../DataStructures/Batch.tsx";
function ProductFlowReport() {
    const timeframeContext = useTimeframeContext();

    const history: Batch[] = [];
    function AddProducts(entries: number) {
        for (let i = 0; i < entries; i++) {
            history.push(new Batch("Wood", Math.floor(Math.random() * 20+1), Math.floor(Math.random() * 10 + 1)));
        }
    }
    // Dummy Data Use Proper DB API for final version
    switch (timeframeContext.value) {
        case TimeRange.CurrentMonth:
            AddProducts(2);
            break;
        case TimeRange.ThreeMonths:
            AddProducts(3);
            break;
        case TimeRange.SixMonths:
            AddProducts(6);
            break;
        case TimeRange.NineMonths:
            AddProducts(9);
            break;
        case TimeRange.Year:
            AddProducts(12);
            break;
        default:
            AddProducts(3);
            break;
    }

    let index : number;
    for (let i = 0; i < history.length; i++) {
        index = Math.floor(Math.random() * history.length);
        history[index].SellProduct(Math.floor(Math.random() * history[index].Count), Math.floor(Math.random() * 30));
    }
    let total: number = 0;
    history.forEach((value) => {
        total += value.Net();
    })
    const contents = (
        <Container fluid>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Total Purchased</th>
                        <th scope="col">Total Sold</th>
                        <th scope="col">Total Revinue</th>
                        <th scope="col">Total Expense</th>
                        <th scope="col">Net Gain/Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr>
                            <td key={index}>{item.Product}</td>
                            <td key={index}>{item.StartingCount} Units</td>
                            <td key={index}>{item.StartingCount - item.Count} Units</td>
                            <td key={index}>{item.TotalRevinue()}</td>
                            <td key={index}>{item.PurchasePrice * item.StartingCount}</td>
                            <td key={index}>{item.Net()}</td>
                        </tr>
                    ))}
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total:</td>
                        <td>{ total }</td>
                    </tr>
                </tbody>
            </Table>  
        </Container>
    );

    return (
    contents
  );
}

export default ProductFlowReport;