import { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/en-au';
import {
  DatetimeStyled,
  Container,
  IconCalendarStyled,
} from './DiaryDateСalendar.styled';
import sprite from 'images/icons.svg';

export const DiaryDateCalendar = () => {
  const [value, setValue] = useState(moment(new Date()));
  const [isOpen, setIsOpen] = useState(false);

  const firstUsageDate = moment(new Date('November 15, 2022'));
  const current = moment(new Date());

  const onChange = newValue => {
    setIsOpen(false);

    if (newValue > current || newValue < firstUsageDate) {
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
        todayButton="Today"
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