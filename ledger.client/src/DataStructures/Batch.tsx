class Batch {
    public Product: string;
    public StartingCount: number;
    public Count: number;
    public PurchasePrice: number;
    public SalePrice: number[];

    TotalRevinue() {
        return Math.floor(this.SalePrice.reduce((sum, price) => sum + price, 0) * (this.StartingCount - this.Count));
    }

    Net() {
        return Math.floor(this.TotalRevinue() - (this.PurchasePrice * this.StartingCount))
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

export default Batch;