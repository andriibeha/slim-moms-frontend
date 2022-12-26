import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
import { CalculatorStyled, CalculatorStyledPage } from './Calculator.styled';

import { BarBackground } from 'components/BarBackground';

const Calculator = () => {
  return (
    <BarBackground>
      <CalculatorStyledPage>
        <CalculatorStyled>
          <DailyCaloriesForm />
        </CalculatorStyled>
        <RightSideBar />
      </CalculatorStyledPage>
    </BarBackground>
  );
};

export default Calculator;
