import { Calculator } from 'pages/Calculator';
import { Diary } from 'pages/Diary';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Logout } from 'pages/Logout';
import { NotFound } from 'pages/NotFound';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';

import { Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
       
        <Route path="" element={<Home />} />

        {/* PRIVATE ROUTES */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/calculator" element={<Calculator />} />

        {/* PUBLICK ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
