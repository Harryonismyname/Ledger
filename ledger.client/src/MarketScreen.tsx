import {Container } from "@mui/material"
import TradeWindow from "./MarketScreenComponents/TradeWindow.tsx"
function MarketScreen() {
    return (
        <Container>
            <TradeWindow/>
            <p>This is the Local Market rates!</p>
        </Container>
  );
}

export default MarketScreen;