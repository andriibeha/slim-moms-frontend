import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
<<<<<<< Updated upstream
import { CalculatorStyled, CalculatorStyledPage } from './Calculator.styled';
=======
import { CalendarStyled, CalendarStyledPage } from './Calendar.styled';
>>>>>>> Stashed changes
import { BarBackground } from 'components/BarBackground';

const Calculator = () => {
  return (
    <BarBackground>
<<<<<<< Updated upstream
      <CalculatorStyledPage>
        <CalculatorStyled>
          <DailyCaloriesForm />
        </CalculatorStyled>
        <RightSideBar />
      </CalculatorStyledPage>
=======
    <CalendarStyledPage>
      <CalendarStyled>
      <DailyCaloriesForm />
      </CalendarStyled>
      <RightSideBar />
    </CalendarStyledPage>
>>>>>>> Stashed changes
    </BarBackground>
  );
};

export default Calculator;
