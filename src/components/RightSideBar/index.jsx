import React from 'react';
<<<<<<< Updated upstream

=======
// import { useState } from "react";
// import { useDispatch } from 'react-redux';
>>>>>>> Stashed changes
import {
  Box,
  List,
  ListTitle,
  PreContent,
  Item,
  BoxList,
  CalcItem,
  CalcTitle,
} from './RightSideBar.styled';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

const dataArray = {
  products: [
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
  dailyCalorie: 0,
  consumedCalories: 0,
  currentDate: "22.12.2022",
};

export const RightSideBar = () => {
<<<<<<< Updated upstream
  const leftCalories = dataArray.dailyCalorie - dataArray.consumedCalories;
  const percentOfNormal = (leftCalories / dataArray.dailyCalorie) * 100;

  return (
    <Box>
      <BoxList>
        <ListTitle>Summary for {dataArray.currentDate}</ListTitle>
        <List as="table">
          <CalcItem>
            <CalcTitle>Left</CalcTitle>
            <td>{leftCalories > 0 ? leftCalories : 0} kcal</td>
          </CalcItem>
          <CalcItem>
            <CalcTitle>Consumed</CalcTitle>
            <td>
              {dataArray.consumedCalories > 0 ? dataArray.consumedCalories : 0}{' '}
              kcal
            </td>
          </CalcItem>
          <CalcItem>
            <CalcTitle>Daily rate </CalcTitle>
            <td>
              {dataArray.dailyCalorie > 0 ? dataArray.dailyCalorie : 0} kcal
            </td>
          </CalcItem>
          <CalcItem>
            <CalcTitle>% of normal</CalcTitle>
            <td>{percentOfNormal > 0 ? Math.round(percentOfNormal) : 0} %</td>
          </CalcItem>
        </List>
      </BoxList>
      <BoxList>
        <ListTitle>Food not recommended</ListTitle>

        {dataArray.dailyCalorie > 0 ? (
          <List as="ol">
=======
  // const dispatch = useDispatch();'
  // const [value, setValue] = useState(0);
  
  const sum = dataArray.reduce((acc, dataArray) => acc + dataArray.calories, 0);
  const percentOfNormal = (sum / dataArray.dailyCalorie) * 100;

  const leftCalories = sum - dataArray.dailyCalorie;
  return (
    <>
      <Box>
        <BoxList>
          <ListTitle>Summary for DATA</ListTitle>
          <List as="table">
            <CalcItem>
              <CalcTitle>Left</CalcTitle>
              <td>{leftCalories} kcal</td>
            </CalcItem>
            <CalcItem>
              <CalcTitle>Consumed</CalcTitle>
              <td>{sum} kcal</td>
            </CalcItem>
            <CalcItem>
              <CalcTitle>Daily rate </CalcTitle>{' '}
              <td>{dataArray.dailyCalorie} kcal</td>
            </CalcItem>
            <CalcItem>
              <CalcTitle>% of normal</CalcTitle>
              <td>{percentOfNormal} %</td>
            </CalcItem>
          </List>
        </BoxList>
        <BoxList>
          <ListTitle>Food not recommended</ListTitle>
          <PreContent> Your diet will be displayed here </PreContent>
          <List as="ul">
>>>>>>> Stashed changes
            {dataArray.products.map(product => (
              <Item key={product._id}>{product.title.ua}</Item>
            ))}
          </List>
        ) : (
          <PreContent> Your diet will be displayed here </PreContent>
        )}
      </BoxList>
    </Box>
  );
};
