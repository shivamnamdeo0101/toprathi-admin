import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedReducer } from './store/RootReducer';
import { rootSaga } from './service/saga/RootSaga';
const saga = createSagaMiddleware();

const store = configureStore({
  reducer:persistedReducer,
  devTools: true,
  middleware:[saga]
})

saga.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
