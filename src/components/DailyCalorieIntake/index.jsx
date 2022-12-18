import React from 'react';
import {
  Box,
  TextCalorie,
  NumberCalorie,
  Unit,
  List,
  ListTitle,
  Item,
  BoxCalorie,
  BoxList,
  Link,
} from './DailyCalorieIntake.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/actions';

const dataArray = {
  products: [
    {
      _id: '5d51694802b2373622ff555c',
      categories: ['зерновые'],
      weight: 100,
      title: {
        ru: 'Гречневая крупа (ядрица) зелёная',
        ua: 'Гречана крупа (ядриця) зелена',
      },
      calories: 296,
      groupBloodNotAllowed: [null, true, false, true, true],
      __v: 0,
    },
    {
      _id: '5d51694802b2373622ff5565',
      categories: ['зерновые'],
      weight: 100,
      title: {
        ru: 'Гречневые хлопья Myllyn Paras для каши',
        ua: 'Гречані пластівці Myllyn Paras для каші',
      },
      calories: 340,
      groupBloodNotAllowed: [null, true, false, true, true],
      __v: 0,
    },
    {
      _id: '5d51694802b2373622ff5569',
      categories: ['зерновые'],
      weight: 100,
      title: {
        ru: 'Гречневые хлопья Пассим',
        ua: 'Гречані пластівці Пассим',
      },
      calories: 322,
      groupBloodNotAllowed: [null, true, false, true, true],
      __v: 0,
    },
    {
      _id: '5d51694802b2373622ff555a',
      categories: ['зерновые'],
      weight: 100,
      title: {
        ru: 'Гречневая крупа (продел)',
        ua: 'Гречана крупа (проділ)',
      },
      calories: 306,
      groupBloodNotAllowed: [null, true, false, true, true],
      __v: 0,
    },
  ],
  dailyCalorie: 993,
};

const DailyCalorieIntake = () => {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(toggleModal(false));
  };
  const mds = window.matchMedia('(min-width: 768px)');
  return (
    <Box>
      {mds.matches ? (
        <TextCalorie>
          Your recommended daily<br></br>calorie intake is
        </TextCalorie>
      ) : (
        <TextCalorie>Your recommended daily calorie intake is</TextCalorie>
      )}
      <BoxCalorie>
        <NumberCalorie>{dataArray.dailyCalorie}</NumberCalorie>
        <Unit>калл</Unit>
      </BoxCalorie>
      <BoxList>
        <ListTitle>Foods you should not eat</ListTitle>
        <List as="ol">
          {dataArray.products.map(product => (
            <Item key={product._id}>{product.title.ua}</Item>
          ))}
        </List>
      </BoxList>
      <Link to="/login" onClick={() => onBtnClick()}>
        Start losing weight
      </Link>
    </Box>
  );
};

export default DailyCalorieIntake;
