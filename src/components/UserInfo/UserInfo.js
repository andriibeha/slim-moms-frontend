import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';
import sprite from 'images/icons.svg';
import {
  UserName,
  ExitBtn,
  UserNameContainer,
  BurgerBtn,
  ModalContent,
  ModalBox,
  MenuButton,
  NameBox,
  Bar,
  UserInfoBox,
  BackArrow,
  BackLink,
  UserNavLink,
  NavLinkBox,
  UserContainer,
} from './UserInfo.styled';

const UserInfoModal = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <MenuButton
        className={menuActive ? 'active' : ''}
        type="button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>
      <UserInfoNav active={menuActive} setActive={setMenuActive} />
    </>
  );
};

const UserInfoNav = ({ active, setActive }) => {
  return (
    <ModalBox className={active ? 'active' : ''}>
      <ModalContent>
        <UserNavLink to={'./diary'} onClick={() => setActive(!active)}>
          Diary
        </UserNavLink>
        <UserNavLink to={'./calculator'} onClick={() => setActive(!active)}>
          Calculator
        </UserNavLink>
      </ModalContent>
    </ModalBox>
  );
};

export const UserInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const name = useSelector(authSelectors.getUsername);

  const isLogout = () => {
    dispatch(logOut());
    console.log('user is logged out');
  };

  return (
    <UserContainer>
      <NavLinkBox>
        <UserNavLink to={'./diary'}>Diary</UserNavLink>
        <UserNavLink to={'./calculator'}>Calculator</UserNavLink>
      </NavLinkBox>

      <UserNameContainer>
        <BackLink to={location.state?.from ?? '/'}>
          <BackArrow>
            <use href={sprite + '#icon-enter-arrow'}></use>
          </BackArrow>
        </BackLink>

        <NameBox>
          <UserName>{name}</UserName>
          <ExitBtn type="button" onClick={isLogout}>
            Exit
          </ExitBtn>
        </NameBox>
      </UserNameContainer>

      <UserInfoModal className="modal" />
    </UserContainer>
  );
};
// UserInfoModal - кнопка+модалка и ссылки
// NameBox - name +Exit
// NavLinkBox - отдельно линки, которые вылазят на десктопе
// UserNameContainer - NameBox+BackLink +NavLinckBox- на мобилке серый фон, на таблетке с бургер-кнопкой -  флекс
