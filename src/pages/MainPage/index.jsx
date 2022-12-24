// import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { MainBackground } from 'components/MainBackground';
import { RightSideBar } from 'components/RightSideBar';

const MainPage = () => {
  return (
    <>
      <MainBackground>
      {/* <Loader /> */}
      <DailyCaloriesForm />
        <RightSideBar />;
        </MainBackground>
    </>
  );
};

export default MainPage;

