import { useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useCurrentScreenContext } from './currentScreenContext';

function Navbar() {
    useEffect(
        () => {

        }
    );

    const currentScreen = useCurrentScreenContext();
    const map = () => currentScreen.updateValue("Map")
    const financials = () => currentScreen.updateValue("Financials")
    const inventory = () => currentScreen.updateValue("Inventory")
    const market = () => currentScreen.updateValue("Market")

    const contents =

        <Row>
            <Col as={Button} onClick={ map}>
                Map
            </Col>
            <Col as={Button} onClick={ financials}>
                Financials
            </Col>
            <Col as={Button} onClick={ inventory }>
                Inventory
            </Col>
            <Col as={Button} onClick={ market }>
                Market
            </Col>
        </Row>;

    return (
        <Container fluid>
            {contents}
        </Container>
    );

}

export default Navbar;