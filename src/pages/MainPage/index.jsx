// import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { MainBackground } from 'components/MainBackground';


const MainPage = () => {
  return (
    <>
      <MainBackground>
      {/* <Loader /> */}
      <DailyCaloriesForm />
        </MainBackground>
    </>
  );
};

export default MainPage;

