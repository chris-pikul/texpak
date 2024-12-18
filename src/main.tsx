import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';

import App from './App.tsx';

//import './reset.css';
import './index.css';
import 'primereact/resources/themes/md-dark-deeppurple/theme.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </StrictMode>,
);
