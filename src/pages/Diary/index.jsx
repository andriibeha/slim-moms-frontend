import { DiaryAddProductForm } from 'components/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateСalendar';
import { DiaryProductsList } from 'components/DiaryProductsList';
import { RightSideBar } from 'components/RightSideBar';

import {
  DiaryStyled,
  Wrapper,
  DiaryAdd,
  DiaryCalendar,
  MobileWrapper,
  MobileButton,
  DiaryStyledPage,
} from './Diary.styled';
import { useWindowResize } from 'hooks/useWindowResize';
import { BarBackground } from 'components/BarBackground';
// import { authSelectors } from '../../redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';


export const Diary = () => {
  const { width } = useWindowResize();


  return (
    <BarBackground>
    <DiaryStyledPage>
      <DiaryStyled>
        <DiaryCalendar>
          <DiaryDateCalendar />
        </DiaryCalendar>
        {width > 767 ? (
          <Wrapper>
            <DiaryAdd>
              <DiaryAddProductForm />
            </DiaryAdd>
            <DiaryProductsList />
          </Wrapper>
        ) : (
          <MobileWrapper>
            <DiaryProductsList />
            <MobileButton to="/add">+</MobileButton>
          </MobileWrapper>
        )}
      </DiaryStyled>
      <RightSideBar />
    </DiaryStyledPage>
    </BarBackground>
  );
};

export default Diary;

