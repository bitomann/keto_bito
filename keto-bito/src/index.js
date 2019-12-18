import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import Ketobito from './components/ketobito';

ReactDOM.render(
    <Router>
        <Ketobito />
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();