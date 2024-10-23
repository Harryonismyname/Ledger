import {TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from "@mui/material"
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
    const totalRevinue = () => {
        let total: number = 0;
        history.forEach((value) => {
            total += value.TotalRevinue();
        })
        return total;
    }
    const totalExpenses = () => {
        let total: number = 0;
        history.forEach((value) => {
            total += value.PurchasePrice * value.StartingCount;
        })
        return total;
    }
    const contents = (
        <Paper sx={{ overflow: "hidden", height: 717, }}>
            <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell scope="col" align="center">Product</TableCell>
                            <TableCell scope="col" align="center">Purchased</TableCell>
                            <TableCell scope="col" align="center">Sold</TableCell>
                            <TableCell scope="col" align="center">Revinue</TableCell>
                            <TableCell scope="col" align="center">Expense</TableCell>
                            <TableCell scope="col" align="center">Net Gain/Loss</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((item, index) => (
                            <TableRow>
                                <TableCell align="center" key={index}>{item.Product}</TableCell>
                                <TableCell align="center" key={index}>{item.StartingCount} Units</TableCell>
                                <TableCell align="center" key={index}>{item.StartingCount - item.Count} Units</TableCell>
                                <TableCell align="right" key={index}>{item.TotalRevinue()}</TableCell>
                                <TableCell align="right" key={index}>{item.PurchasePrice * item.StartingCount}</TableCell>
                                <TableCell align="right" key={index}>{item.Net()}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} rowSpan={3} />
                            <TableCell colSpan={2 }>Revinue:</TableCell>
                            <TableCell align="right">{ totalRevinue() }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2 }>Expenses:</TableCell>
                            <TableCell align="right">-{ totalExpenses() }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2 }>Net:</TableCell>
                            <TableCell align="right">{ total }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>  
            </TableContainer>

        </Paper>
    );

    return (
    contents
  );
}

export default ProductFlowReport;