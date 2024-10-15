import { Table, Container, Button, Collapse } from "react-bootstrap";
import Batch from "../DataStructures/Batch.tsx";
import { useState } from "react"; // Make sure React is imported if you're using React hooks

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

    products.map((item) => { 
        if (!keys.includes(item.Product)) keys.push(item.Product);
        if (!(item.Product in inventory)) inventory[item.Product] = [];
        inventory[item.Product].push(item);
    });

    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleOpen = (key: string) => {
        setOpenItems(prevOpen => ({
            ...prevOpen,
            [key]: !prevOpen[key]
        }));
    };

    const contents = (
        <Container fluid>
            <ul>
                {keys.map((item, index) => (
                    <li key={index}>
                        <Button 
                            aria-expanded={openItems[item] || false} 
                            aria-controls={`productDetails${item}`} 
                            type="button" 
                            onClick={() => toggleOpen(item)}
                        >
                            {item}
                        </Button>
                        <Collapse in={openItems[item] || false}>
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
                        </Collapse>
                    </li>
                ))}
            </ul>
        </Container>
    );

    return contents;
}

export default InventoryDisplay;