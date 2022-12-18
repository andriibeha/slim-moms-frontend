import { Calculator } from 'pages/Calculator';
import { Diary } from 'pages/Diary';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Logout } from 'pages/Logout';
import { NotFound } from 'pages/NotFound';
import { RegistrationPage } from 'pages/RegistrationPage';
import { SharedLayout } from 'components/SharedLayout';
import { Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';

import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="" element={<Home />} /> */}

          {/* PRIVATE ROUTES */}
          <Route path="/logout" element={<Logout />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />

          {/* PUBLICK ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
