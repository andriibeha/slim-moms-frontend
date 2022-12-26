import React from 'react';
import {
  Box,
  List,
  ListTitle,
  PreContent,
  Item,
  BoxList,
  Container,
  Title,
  Content,
  ContainerItem,
} from './RightSideBar.styled';
import { useAuth } from 'hooks/useAuth';
<<<<<<< Updated upstream
// import { useSelector } from 'react-redux';
=======
import { useSelector } from 'react-redux';
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
<<<<<<< Updated upstream
  caloricityPerDay: 0,
=======
  consumedCalories: 0,
>>>>>>> Stashed changes
  currentDate: '22.12.2022',
};

export const RightSideBar = () => {
  const { user } = useAuth();
<<<<<<< Updated upstream
  const notRecProducts = user.data.user.notRecProducts;
  const dailyCalorie = user.data.user.dailyCalorie;
  console.log(notRecProducts, dailyCalorie);

  // const dataApi = useSelector(state => state.diary.data);
  // const { caloricityPerDay, date} = dataApi.data;
  // console.log(caloricityPerDay, date);

  const leftCalories = dailyCalorie - dataArray.caloricityPerDay;
  const percentOfNormal = (leftCalories / dailyCalorie) * 100;
=======
  console.log(user.data.user.notRecProducts, user.data.user.dailyCalorie);
  const caloricityPerDay= useSelector(state => state.diary.state );
  // const { date} = dataApi.data;
  console.log(caloricityPerDay);

  // const dataApi = useSelector(state => state.user.data);
  // // const { notRecProducts, dailyCalorie } = dataApi.result;
 
  // const dataApi = useSelector(state => state.bloodDiet.data);
  // const { products, dailyCalorie } = dataApi.data.result;

  const leftCalories = dataArray.dailyCalorie - dataArray.consumedCalories;
  const percentOfNormal = (leftCalories / dataArray.dailyCalorie) * 100;
>>>>>>> Stashed changes

  return (
    <Box>
      <BoxList>
        <ListTitle>Summary for {dataArray.currentDate}</ListTitle>
        <Container>
          <ContainerItem>
            <Title>Left</Title>
            <Content>{leftCalories > 0 ? leftCalories : 0} kcal</Content>{' '}
          </ContainerItem>
          <ContainerItem>
            <Title>Consumed</Title>
            <Content>
<<<<<<< Updated upstream
              {dataArray.consumedCalories > 0 ? dataArray.caloricityPerDay : 0}{' '}
              kcal{' '}
=======
              {dataArray.consumedCalories > 0 ? dataArray.consumedCalories : 0}
              kcal
>>>>>>> Stashed changes
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>Daily rate </Title>
<<<<<<< Updated upstream
            <Content> {dailyCalorie > 0 ? dailyCalorie : 0} kcal </Content>
=======
            <Content>
              {dataArray.dailyCalorie > 0 ? dataArray.dailyCalorie : 0} kcal
            </Content>
>>>>>>> Stashed changes
          </ContainerItem>
          <ContainerItem>
            <Title>% of normal</Title>
            <Content>
              {percentOfNormal > 0 ? Math.round(percentOfNormal) : 0} %
            </Content>
          </ContainerItem>
        </Container>
      </BoxList>
      <BoxList>
        <ListTitle>Food not recommended</ListTitle>
<<<<<<< Updated upstream

        {dailyCalorie > 0 ? (
          <List>
            {notRecProducts.map(product => (
=======
        {dataArray.dailyCalorie > 0 ? (
          <List>
            {user.data.user.notRecProducts.map(product => (
>>>>>>> Stashed changes
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
