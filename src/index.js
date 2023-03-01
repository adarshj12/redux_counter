import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//importing the store (database);
import store from './store';
//there is a provider and a consumer
import { Provider } from 'react-redux'; // to pass the data globally to children or to parent
                                        // using provider

store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);
