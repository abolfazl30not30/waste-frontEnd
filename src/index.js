import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import * as ServiceWorker from './serviceWorker';
import "./assets/css/style.css"
import "./assets/css/rtl.css"
import "./assets/css/responsive.css"
import './assets/css/bootstrap.rtl.min.css'
import './assets/css/remixicon.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

ServiceWorker.unregister();