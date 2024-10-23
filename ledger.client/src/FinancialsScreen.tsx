import {Grid2 } from "@mui/material"
import ProfitGraph from './FinancialScreenComponents/ProfitGraph.tsx';
import TransactionHistory from './FinancialScreenComponents/TransactionHistory.tsx';
import ProductFlowReport from './FinancialScreenComponents/ProductFlowReport.tsx';
import TimeframePicker from "./FinancialScreenComponents/TimeframePicker.tsx";
import { TimeframeContextProvider } from "./FinancialScreenComponents/TimeframeContext.tsx";
import {TransactionsContextProvider } from "./FinancialScreenComponents/TransactionContext.tsx"

function FinancialsScreen() {
    return (
        <TimeframeContextProvider>
            <TransactionsContextProvider>
                <Grid2 spacing={2 } container>
                    <Grid2 size={6}>
                        <ProfitGraph />
                        <TimeframePicker/>
                        <TransactionHistory/>
                    </Grid2>
                    <Grid2 size="grow">
                        <ProductFlowReport/>
                    </Grid2>
                </Grid2>
            </TransactionsContextProvider>
      </TimeframeContextProvider>
  );
}

export default FinancialsScreen;