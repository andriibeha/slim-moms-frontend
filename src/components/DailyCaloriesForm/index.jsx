import { Button } from 'components/Button';
import {
  Wrap,
  Title,
  Form,
  Label,
  Input,
  BloodList,
  RadioButton,
  ButtonContainer,
  BloodListItem,
  WrapBox,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  return (
    <Wrap>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form>
        <WrapBox>
          <Label htmlFor="height">
            Height *
            <Input
              pattern="[0-9]"
              required
              id="height"
              type="number"
              name="height"
            />
          </Label>
          <Label htmlFor="age">
            Age *
            <Input pattern="[0-9]" id="age" required type="number" name="age" />
          </Label>
          <Label htmlFor="currentWeight">
            Current weight *
            <Input
              pattern="[0-9]"
              required
              id="currentWeight"
              type="number"
              name="currentWeight"
            />
          </Label>
        </WrapBox>
        <WrapBox>
          <Label htmlFor="desiredWeight">
            Desired weight *
            <Input
              pattern="[0-9]"
              id="desiredWeight"
              required
              name="desiredWeight"
              type="number"
            />
          </Label>
          <Label htmlFor="bloodType" required>
            <p style={{ marginBottom: '8px' }}>Blood type *</p>
            <BloodList>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-1"
                  value={1}
                />
                <label htmlFor="blood-inp-1">1</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-2"
                  value={2}
                />
                <label htmlFor="blood-inp-2">2</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-3"
                  value={3}
                />
                <label htmlFor="blood-inp-3">3</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-4"
                  value={4}
                />
                <label htmlFor="blood-inp-4">4</label>
              </BloodListItem>
            </BloodList>
          </Label>
        </WrapBox>

        <ButtonContainer>
          <Button type="submit" text="Start losing weight" />
        </ButtonContainer>
      </Form>
    </Wrap>
  );
};
