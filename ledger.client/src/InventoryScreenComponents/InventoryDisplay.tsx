import { Accordion, AccordionSummary, AccordionDetails, Table, Grid2 } from "@mui/material";
import Batch from "../DataStructures/Batch.tsx";

const products: Batch[] = [];

function AddProducts(entries: number, product: string) {
    for (let i = 0; i < entries; i++) {
        products.push(new Batch(product, Math.floor(Math.random() * 20 + 1), Math.floor(Math.random() * 10 + 1)));
    }
}

const items = () => Math.floor(Math.random() * 5); // Ensure items() returns an integer
AddProducts(items(), "Wood");
AddProducts(items(), "Ore");
AddProducts(items(), "Tools");

let index: number;
for (let i = 0; i < products.length; i++) {
    index = Math.floor(Math.random() * products.length);
    products[index].SellProduct(Math.floor(Math.random() * products[index].Count), Math.floor(Math.random() * 30));
}
function InventoryDisplay() {


    const inventory: { [key: string]: Batch[] } = {};
    const keys: string[] = [];

    const sumTotal = (product: Batch[]) => {
        return product.map((item) => {
            return item?.Count;
        }).reduce((acc, current) => acc + current, 0);

    }

    products.map((item) => {
        if (!keys.includes(item.Product)) keys.push(item.Product);
        if (!(item.Product in inventory)) inventory[item.Product] = [];
        inventory[item.Product].push(item);
    });


    const contents = (
        <div>
            {keys.map((item) => (
                <Accordion>
                    <AccordionSummary aria-controls={`productDetails${item}`}>
                        <Grid2 container spacing={2}>
                            <Grid2 size="grow">
                                {item}
                            </Grid2>
                            <Grid2 size={6}>
                                Onhand:
                            </Grid2>
                            <Grid2 size="auto">
                                {sumTotal(inventory[item]) }
                            </Grid2>
                        </Grid2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Table id={`productDetails${item}`}>
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Total Purchased</th>
                                    <th scope="col">Total Sold</th>
                                    <th scope="col">Remaining</th>
                                    <th scope="col">Purchase Price per Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory[item].map((product, i) => (
                                    <tr key={i}>
                                        <td>{product.Product}</td>
                                        <td>{product.StartingCount} Units</td>
                                        <td>{product.StartingCount - product.Count} Units</td>
                                        <td>{product.Count} Units</td>
                                        <td>{product.PurchasePrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );

    return contents;
}

export default InventoryDisplay;