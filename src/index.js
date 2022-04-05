import React from 'react';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client';
<<<<<<< HEAD

import {Provider} from "react-redux";
import store from './redux/configureStore'

=======
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
<<<<<<< HEAD
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
