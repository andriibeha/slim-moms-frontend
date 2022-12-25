import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/en-au';
import {
  DatetimeStyled,
  Container,
  IconCalendarStyled,
} from './DiaryDateСalendar.styled';
import sprite from 'images/icons.svg';
import { setDate } from 'redux/diary/diarySlice';
// import { diarySelectors } from 'redux/diary/diarySelectors';

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(moment(new Date()));
  const [isOpen, setIsOpen] = useState(false);
  // const dateFirstAdded = new Date(
  //   useSelector(diarySelectors.selectDateFirstAdded)
  // );

  const dateFirstAdded = 'November 15, 2022';
  const first = moment(new Date(dateFirstAdded));
  const current = moment(new Date());

  const normalizeDate = date => {
    return `${date.format('YYYY.MM.DD')}Z`;
  };

  useEffect(() => {
    dispatch(setDate(normalizeDate(value)));
  }, [value, dispatch]);

  console.log(first);

  const onChange = newValue => {
    setIsOpen(false);

    if (newValue > current || newValue < first) {
      alert('Selected date is not valid');
      setValue(current);
      return;
    }
    setValue(newValue);
  };

  return (
    <Container>
      <DatetimeStyled
        locale="en-au"
        closeOnSelect={true}
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        open={isOpen}
        value={value}
        onChange={onChange}
      />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IconCalendarStyled>
          <use href={sprite + '#icon-calendar_18x20'} />
        </IconCalendarStyled>
      </button>
    </Container>
  );
};
