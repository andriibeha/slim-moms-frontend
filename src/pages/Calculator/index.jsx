import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
import { CalculatorStyledPage } from './Calculator.styled';

import { BarBackground } from 'components/BarBackground';
// import { CalculateCaloriesForm } from 'components/CalculateCaloriesForm';

const Calculator = () => {
  const isLoading = useSelector(state => state.bloodDiet.isLoading);
  return (
    <BarBackground>
      <CalculatorStyledPage>
        <DailyCaloriesForm />
        {isLoading && <Loader />}
        <RightSideBar />
      </CalculatorStyledPage>
    </BarBackground>
  );
};

export default Calculator;
