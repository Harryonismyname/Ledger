import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableFooter, Paper } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import {DataGrid, GridColDef } from "@mui/x-data-grid"

function TradeWindow() {


    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: "inventory", headerName: "Inventory", headerAlign: "center"},
        { field: "inventoryActions", headerName: "Actions", headerAlign: "center" },
        { field: "sellingStagingArea", headerName: "Staging Area", headerAlign: "center"},
        { field: "totals", headerName: "Totals", headerAlign: "center"},
        { field: "buyingStagingArea", headerName: "Staging Area", headerAlign: "center"},
        { field: "storehouseActions", headerName: "Actions", headerAlign: "center" },
        { field: "storehouseContents", headerName: "Storehouse", headerAlign: "center"}
    ]

    const rows = [
        {},
        {},
        {},
    ]

    const table = (
        <TableContainer component={Paper } >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2} align="center">
                            Inventory
                        </TableCell>
                        <TableCell align="center">
                            Actions
                        </TableCell>
                        <TableCell colSpan={2} align="center">
                            Selling Staging Area
                        </TableCell>
                        <TableCell align="center">
                            Trasaction Values
                        </TableCell>
                        <TableCell colSpan={2} align="center">
                            Buying Staging Area
                        </TableCell>
                        <TableCell align="center">
                            Actions
                        </TableCell>
                        <TableCell colSpan={2} align="center">
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
                            <ButtonGroup>
                                <Button>{"|<"}</Button>
                                <Button>{"<"}</Button>
                                <Button>{">"}</Button>
                                <Button>{">|"}</Button>
                            </ButtonGroup>
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
                        <TableCell>
                            <ButtonGroup>
                                <Button>{"|<"}</Button>
                                <Button>{"<"}</Button>
                                <Button>{">"}</Button>
                                <Button>{">|"}</Button>
                            </ButtonGroup>
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