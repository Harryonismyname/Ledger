import './App.css';
import Navbar from './Navbar.tsx'
import { useCurrentScreenContext } from './currentScreenContext';
import Container from 'react-bootstrap/Container';


function App() {
    const currentScreen = useCurrentScreenContext();

    const contents = 
    <Container fluid>
            <Navbar />
            <p>{currentScreen.value}
            </p>
    </Container>

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}

export default App;