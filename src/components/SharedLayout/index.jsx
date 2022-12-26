import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { Box } from '../Box';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Box width={[1]}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
