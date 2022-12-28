import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
import { CalculatorStyledPage, CalculatorStyled } from './Calculator.styled';

import { BarBackground } from 'components/BarBackground';
// import { CalculateCaloriesForm } from 'components/CalculateCaloriesForm';

const Calculator = () => {
  return (
    <BarBackground>
      <CalculatorStyledPage>
        <CalculatorStyled>
          <DailyCaloriesForm />
          {/* <CalculateCaloriesForm /> */}
        </CalculatorStyled>
        <RightSideBar />
      </CalculatorStyledPage>
    </BarBackground>
  );
};

export default Calculator;
