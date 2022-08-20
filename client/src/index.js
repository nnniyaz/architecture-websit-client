import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './components/Main/Main';

import Layout from './components/pages/Admin/Layout/Layout';
import Admin from './components/pages/Admin/Mainpage/Admin';
import Users from './components/pages/Admin/Users/Users';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import Reset from './components/pages/Restore/Reset';
import Restore from './components/pages/Restore/Restore';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './context/auth-provider';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Main />}></Route>
          </Route>

          <Route path='admin' element={<Login />} />
          <Route path='admin/registration' element={<Registration />} />
          <Route path='admin/restore' element={<Restore />} />
          <Route path='admin/reset/:email/:id/:link' element={<Reset />} />
          <Route element={<PersistLogin />}>
            {/* <Route element={<RequireAuth />}> */}
              <Route element={<Layout />}>
                <Route path='/admin/main' element={<Admin />} />
                <Route path='/admin/users' element={<Users />} />
                <Route path='/admin/projects' element={<Users />} />
              </Route>
            {/* </Route> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
