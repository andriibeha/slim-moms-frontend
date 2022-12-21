import { DiaryAddProductForm } from 'components/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateСalendar';
import { DiaryProductsList } from 'components/DiaryProductsList';

export const Diary = () => {
  return (
    <>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />;
    </>
  );
};
