import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { Box } from '../Box';

export const SharedLayout = () => {
  return (
    <Box width={[1]}>
      <Header />   
       <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Box>
  );
};
