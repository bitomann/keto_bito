import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import KetoBito from './components/KetoBito';

ReactDOM.render(
    <Router>
        <KetoBito />
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();