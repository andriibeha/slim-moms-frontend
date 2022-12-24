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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserDate } from '../../redux/user/slice';
import { toggleModal } from '../../redux/modal/slice';
import { getDiet, getDietUser } from '../../redux/bloodDiet/operations';
import { useSelector } from 'react-redux';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState(null);

  const dispatch = useDispatch();
  const savedFormData = useSelector(state => state.user.userDate);
  const token = useSelector(state => state.auth.token);
  console.log(token);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'currentWeight':
        setCurrentWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      default:
        return;
    }
  };

  const handleRadioChange = event => {
    setBloodType(event.target.value);
  };

  const reset = () => {
    setHeight('');
    setAge('');
    setCurrentWeight('');
    setDesiredWeight('');
    setBloodType('');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(
      changeUserDate({
        height: height,
        age: age,
        curWeight: currentWeight,
        desWeight: desiredWeight,
        bloodType: bloodType,
      })
    );
    if (token) {
      try {
        await dispatch(
          getDietUser({
            height: Number(height),
            age: Number(age),
            curWeight: Number(currentWeight),
            desWeight: Number(desiredWeight),
            bloodType: Number(bloodType),
          })
        );
        dispatch(toggleModal(true));
      } catch {
        console.log(Error);
      }
    } else {
      try {
        await dispatch(
          getDiet({
            height: Number(height),
            age: Number(age),
            curWeight: Number(currentWeight),
            desWeight: Number(desiredWeight),
            bloodType: Number(bloodType),
          })
        );
        dispatch(toggleModal(true));
      } catch {
        console.log(Error);
      }
    }
    reset();
  };

  return (
    <Wrap>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={handleSubmit}>
        <WrapBox>
          <Label htmlFor="height">
            Height *
            <Input
              pattern="[0-9]"
              required
              id="height"
              type="number"
              name="height"
              defaultValue={token ? savedFormData.height : ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="age">
            Age *
            <Input
              pattern="[0-9]"
              id="age"
              required
              type="number"
              name="age"
              defaultValue={token ? savedFormData.age : ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="currentWeight">
            Current weight *
            <Input
              pattern="[0-9]"
              required
              id="currentWeight"
              type="number"
              name="currentWeight"
              defaultValue={token ? savedFormData.curWeight : ''}
              onChange={handleInputChange}
            />
            {/*
  TitleRadioBtn,
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
*/}
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
              defaultValue={token ? savedFormData.desWeight : ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="bloodType" required>
            <p style={{ marginBottom: '8px' }}>Blood type *</p>

            {/* 
            <Input
              pattern="[0-9]"
              id="desiredWeight"
              required
              name="desiredWeight"
              type="number"
            />
          </Label>
          <Label htmlFor="bloodType" required>
            <TitleRadioBtn style={{ marginBottom: '8px' }}>
              Blood type *
            </TitleRadioBtn>
            */}

            <BloodList>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-1"
                  value={1}
                  defaultChecked={
                    token && savedFormData.bloodType === '1' ? true : false
                  }
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-1">1</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-2"
                  value={2}
                  defaultChecked={
                    token && savedFormData.bloodType === '2' ? true : false
                  }
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-2">2</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-3"
                  value={3}
                  defaultChecked={
                    token && savedFormData.bloodType === '3' ? true : false
                  }
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-3">3</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-4"
                  value={4}
                  defaultChecked={
                    token && savedFormData.bloodType === '4' ? true : false
                  }
                  onChange={handleRadioChange}
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
