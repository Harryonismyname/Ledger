import { Row, Col } from "react-bootstrap";
import ProfitGraph from './FinancialScreenComponents/ProfitGraph.tsx';
import TransactionHistory from './FinancialScreenComponents/TransactionHistory.tsx';
import ProductFlowReport from './FinancialScreenComponents/ProductFlowReport.tsx';

function FinancialsScreen() {
  return (
        <Row>
          <Col className="container-fluid">
            <ProfitGraph />
            <TransactionHistory/>
          </Col>
          <Col className="container-fluid">
            <ProductFlowReport/>
          </Col>
        </Row>
  );
}

export default FinancialsScreen;