import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { UserName, ExitBtn, UserInfoContainer } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const name = 'Nick';

  const isLogout = () => {
    dispatch(logOut());
    console.log('user is logged out');
  };

  return (
    <UserInfoContainer>
      <UserName>{name}</UserName>
      <ExitBtn type="button" onClick={isLogout}>
        Exit
      </ExitBtn>
    </UserInfoContainer>
  );
};
