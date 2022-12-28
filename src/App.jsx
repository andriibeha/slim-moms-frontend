import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';
import Modal from './components/Modal';
// import Loader from 'components/Loader/Loader';

import PrivateRoute from 'routes/PrivatRoutes';
import PublicRoute from 'routes/PublicRoutes';
import ErrorRoute from 'routes/ErrorRoutes';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';
import { useAuth } from 'hooks/useAuth';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Loader from 'components/Loader/Loader';
//Add lazy
import { AddProduct } from 'pages/AddProduct';
import RegisterRoute from 'routes/RegisterRoutes';
import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage/index'));
const Login = lazy(() => import('./pages/Login/index'));
const Logout = lazy(() => import('./pages/Logout/index'));
const Calculator = lazy(() => import('./pages/Calculator/index'));
const Diary = lazy(() => import('./pages/Diary/index'));
const MainPage = lazy(() => import('./pages/MainPage/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));
const ModalPage = lazy(() => import('./pages/ModalPage/index'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token } = useAuth();

  useEffect(() => {
    if (!token) return;
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  const showModal = useSelector(bloodSelectors.selectShowModal);

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
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route
              path="/modal"
              element={
                <ErrorRoute>
                  <ModalPage />
                </ErrorRoute>
              }
            />
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
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              }
            />
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
                <PublicRoute redirectTo="/diary">
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <RegisterRoute redirectTo="/login">
                  <RegistrationPage />
                </RegisterRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer />
    </>
  );
};
