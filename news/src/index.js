import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const dRoot = document.getElementById('root');

const root = ReactDOM.createRoot(dRoot);
root.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

