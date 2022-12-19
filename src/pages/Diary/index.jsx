import { DiaryProductsList } from 'components/DiaryProductsList';

import { DiaryDateСalendar } from 'components/DiaryDateСalendar';
// import { DiaryAddProductForm } from 'components/DiaryAddProductForm';

// import { authSelectors } from '../../redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';

import { Box } from 'components/Box';
import { UserInfo } from 'components/UserInfo';

export const Diary = () => {
  // const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box>
      <UserInfo />
      <DiaryDateСalendar />
      {/* <DiaryAddProductForm /> */}
      <DiaryProductsList />
    </Box>
  );
};
