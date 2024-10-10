import { Row, Col } from "react-bootstrap";
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
                <Row>
                  <Col className="container-fluid">
                    <ProfitGraph />
                    <TimeframePicker/>
                    <TransactionHistory/>
                  </Col>
                  <Col className="container-fluid">
                    <ProductFlowReport/>
                  </Col>
                </Row>
            </TransactionsContextProvider>
      </TimeframeContextProvider>
  );
}

export default FinancialsScreen;