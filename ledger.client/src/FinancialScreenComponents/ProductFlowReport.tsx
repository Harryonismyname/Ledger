import { Table, Container } from "react-bootstrap";

class Batch {
    public Product: string;
    public StartingCount: number;
    public Count: number;
    public PurchasePrice: number;
    public SalePrice: number[];

    AverageSalePrice() {
        if (this.SalePrice.length < 1) return 0;
        let average: number = this.SalePrice[0];
        for (let i = 1; i < this.SalePrice.length; i++) {
            average += this.SalePrice[i];
        }
        average /= this.SalePrice.length;
        return Math.floor(average);
    }

    Net() {
        return Math.floor((this.AverageSalePrice() - this.PurchasePrice) * this.StartingCount)
    }

    SellProduct(amount: number, price: number) {
        if (this.Count - amount < 0) return;
        this.Count -= amount;
        this.SalePrice.push(price);
    }

    constructor(product: string, count: number, purchasePrice: number) {
        this.Product = product;
        this.StartingCount = count;
        this.Count = count;
        this.PurchasePrice = purchasePrice;
        this.SalePrice = [];
    }

}

function ProductFlowReport() {
    const history: Batch[] = [
        new Batch("Wood", 20, 5),
        new Batch("Wood", 10, 10),
        new Batch("Wood", 50, 1),
        new Batch("Wood", 20, 5),
        new Batch("Wood", 20, 5),
    ]
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
                        <th scope="col">Purchase Price</th>
                        <th scope="col">Average Sale Price</th>
                        <th scope="col">Product Remaining</th>
                        <th scope="col">Net Gain/Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr>
                            <td key={index}>{item.Product}</td>
                            <td key={index}>{item.PurchasePrice}</td>
                            <td key={index}>{item.AverageSalePrice()}</td>
                            <td key={index}>{item.Count}</td>
                            <td key={index}>{item.Net()}</td>
                        </tr>
                    ))}
                    <tr>
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