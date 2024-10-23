import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CurrentScreenProvider } from './currentScreenContext.tsx';
import App from './App.tsx';
import './index.css';
import {Container} from '@mui/material';

const root = document.getElementById('root');
root!.className = "container-fluid";
createRoot(root!).render(
    <StrictMode>
        <Container>
            <CurrentScreenProvider>
                <App />
            </CurrentScreenProvider>
        </Container>
    </StrictMode>,
)
