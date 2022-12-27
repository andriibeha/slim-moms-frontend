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

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';
import { useAuth } from 'hooks/useAuth';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Loader from 'components/Loader/Loader';
//Add lazy
import { AddProduct } from 'pages/AddProduct';

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
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
      {isRefreshing ? (
        <Loader />
      ) : (
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
            <Route
              path="/modal"
              element={
                <PrivateRoute>
                  <ModalPage />
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
            <Route
              path="/diet"
              element={
                <PublicRoute>
                  <ModalPage />
                </PublicRoute>
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
