import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

