import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider} from "react-helmet-async";


ReactDOM.render(
    <HelmetProvider>
        <BrowserRouter>
            <Apps />
</BrowserRouter>
</HelmetProvider>, document.getElementById('root'));