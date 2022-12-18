// import Loader from 'components/Loader/Loader';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';



export const MainPage = () => {
  return (
    <>
      <Logo />
      {/* <Loader /> */}
      <DailyCaloriesForm/>
      <Button text="Hello" />
    </>
  );
};
