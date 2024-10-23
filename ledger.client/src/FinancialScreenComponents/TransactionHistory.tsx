import {Paper, TableContainer, Table , TableHead, TableBody, TableRow, TableCell, Toolbar, Typography} from "@mui/material"
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
        <Paper sx={{ width: "100%", overflowY: "hidden", height:400}}>
            <Toolbar>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Transaction History:
                </Typography>
            </Toolbar>
            <TableContainer sx={{maxHeight: 340} }>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell scope="col">Date</TableCell>
                            <TableCell scope="col">Product</TableCell>
                            <TableCell scope="col">Units</TableCell>
                            <TableCell scope="col">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dates?.map((item, index) => (
                            <TableRow>
                                <TableCell key={index}>{item.date}</TableCell>
                                <TableCell>{ item.product }</TableCell>
                                <TableCell>{ item.units }</TableCell>
                                <TableCell>{ item.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )

  return ( content );
}

export default TransactionHistory;