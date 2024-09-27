import './App.css';
import Navbar from './Navbar.tsx'
import { useCurrentScreenContext } from './currentScreenContext';
import Container from 'react-bootstrap/Container';


function App() {
    const currentScreen = useCurrentScreenContext();

    return (
        <Container fluid>
            <Navbar />
            <Container fluid>
                {currentScreen.value}
            </Container>
        </Container>
    );
}

export default App;