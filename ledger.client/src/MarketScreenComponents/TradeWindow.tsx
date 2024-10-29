import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from "@mui/material"
import {Button } from "@mui/material"

function TradeWindow() {

    const table = (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={ 2 }>
                            Inventory
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                        <TableCell colSpan={2 }>
                            Selling Staging Area
                        </TableCell>
                        <TableCell>
                            Trasaction Values
                        </TableCell>
                        <TableCell colSpan={2 }>
                            Buying Staging Area
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                        <TableCell colSpan={2}>
                            Available Stock
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p>Stuff</p>
                        </TableCell>
                        <TableCell>
                            <p>Price</p>
                        </TableCell>
                        <TableCell>
                            <Button>{"|<"}</Button>
                            <Button>{"<"}</Button>
                            <Button>{">"}</Button>
                            <Button>{">|"}</Button>
                        </TableCell>
                        <TableCell>
                            <p>Stuff</p>
                        </TableCell>
                        <TableCell>
                            <p>Price</p>
                        </TableCell>
                        <TableCell>
                            <p>Values</p>
                        </TableCell>
                        <TableCell>
                            <p>Stuff</p>
                        </TableCell>
                        <TableCell>
                            <p>Price</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )

    const content = (
        table
    )

    return content;
}

export default TradeWindow;