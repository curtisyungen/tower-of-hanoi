import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from "./redux/store.js";
import './index.css';

// The Provider component  makes the redux store available
// to all container components in the application
// without having to pass it explicitly as a prop
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
