import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
// import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import { SharedLayout } from './components/SharedLayout';
import Modal from './components/Modal';
// import Loader from 'components/Loader/Loader';

import { PrivateRoute } from 'routes/PrivatRoutes';
import { PublicRoute } from 'routes/PublicRoutes';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';

//Add lazy
import { AddProduct } from 'pages/AddProduct';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage/index'));
const Login = lazy(() => import('./pages/Login/index'));
const Logout = lazy(() => import('./pages/Logout/index'));
const Calculator = lazy(() => import('./pages/Calculator/index'));
const Diary = lazy(() => import('./pages/Diary/index'));
const MainPage = lazy(() => import('./pages/MainPage/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

export const App = () => {
  const showModal = useSelector(state => state.modal.showModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showModal]);

  return (
    <>
      <Global styles={GlobalStyles} />
      {showModal && <Modal />}
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />

          {/* PRIVATE ROUTES */}
          <Route
            path="/logout"
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute>
                <Diary />
              </PrivateRoute>
            }
          />

          <Route path="/add" element={<AddProduct />} />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <Calculator />
              </PrivateRoute>
            }
          />

          {/* PUBLICK ROUTES */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
      <ToastContainer />
    </>
  );
};
