// import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';

export const MainPage = () => {
  return (
    <>
      {/* <Loader /> */}
      <DailyCaloriesForm />
      <RightSideBar />;
    </>
  );
};
