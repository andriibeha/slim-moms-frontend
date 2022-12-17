import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Box } from '../Box';

export const SharedLayout = () => {
  return (
    <Box width={[1]}>
      <Header />
      <Box p={[20, 20, 32, 16]}>
        <Outlet />
      </Box>
    </Box>
  );
};
