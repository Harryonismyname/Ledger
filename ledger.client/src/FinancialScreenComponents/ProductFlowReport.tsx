import { Table, Container } from "react-bootstrap";

function ProductFlowReport() {
    const contents = (
        <Container fluid>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Purchase Date</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">Sale Date</th>
                        <th scope="col">Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>  
        </Container>
    );

    return (
    contents
  );
}

export default ProductFlowReport;