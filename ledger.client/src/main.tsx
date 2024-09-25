import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CurrentScreenProvider } from './currentScreenContext.tsx';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Container from 'react-bootstrap/Container';

const root = document.getElementById('root');
root!.className = "container-fluid";
createRoot(root!).render(
    <StrictMode>
        <Container fluid>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                ></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                ></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
            <CurrentScreenProvider>
                <App />
            </CurrentScreenProvider>
        </Container>
    </StrictMode>,
)
