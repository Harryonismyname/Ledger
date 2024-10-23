import './App.css';
import Navbar from './Navbar.tsx'
import { useCurrentScreenContext } from './currentScreenContext';
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";


function App() {
    const currentScreen = useCurrentScreenContext();

    return (
        <Container maxWidth="lg">
            <Stack direction="column"
                spacing={6}
                sx={
                    {
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                <Navbar />
                {currentScreen.value}
            </Stack>
        </Container>
    );
}

export default App;