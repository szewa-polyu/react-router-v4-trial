import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom"

// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
