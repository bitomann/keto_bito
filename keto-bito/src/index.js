import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Ketobito from './components/Ketobito';
// import serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Ketobito />
    </Router>
    , document.getElementById('root'));

// serviceWorker.unregister()