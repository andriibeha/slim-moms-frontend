import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { Box } from '../Box';

export const SharedLayout = () => {
  return (
    <Box width={[1]}>
      <Header />
      <Box p={[20, 20, 32, 16]}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
