import { useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useCurrentScreenContext } from './currentScreenContext';
import Map from './MapScreen.tsx';
import FinancialsScreen from './FinancialsScreen.tsx'
import InventoryScreen from './InventoryScreen.tsx';
import MarketScreen from './MarketScreen.tsx';

function Navbar() {
    useEffect(
        () => {

        }
    );

    const currentScreen = useCurrentScreenContext();
    const map = () => currentScreen.updateValue(<Map />);
    const financials = () => currentScreen.updateValue(<FinancialsScreen />);
    const inventory = () => currentScreen.updateValue(<InventoryScreen />);
    const market = () => currentScreen.updateValue(<MarketScreen/>);

    const contents =

        <Stack direction="row" spacing={ 4} sx={{justifyContent:"center"} }>
            <Button onClick={ map}>
                Map
            </Button>
            <Button onClick={financials}>
                Financials
            </Button>
            <Button onClick={inventory}>
                Inventory
            </Button>
            <Button onClick={market}>
                Market
            </Button>
        </Stack>;

    return (
        <Container maxWidth="lg" sx={{
            position: 'fixed',   // Fixes the element's position on the screen
            top: 0,              // Anchors it to the top
            width: '100%',       // Ensures it stretches across the width of the screen
            padding: '16px',     // Some padding for the content
            backgroundColor : "darkgrey",
            boxShadow: '0 4px 2px -2px gray', // Optional shadow for styling
        }}>
            {contents}
        </Container>
    );

}

export default Navbar;