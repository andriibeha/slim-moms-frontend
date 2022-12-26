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
// import { useSelector } from 'react-redux';

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
  caloricityPerDay: 0,
  currentDate: '22.12.2022',
};

export const RightSideBar = () => {
  const { user } = useAuth();
  const notRecProducts = user.data.user.notRecProducts;
  const dailyCalorie = user.data.user.dailyCalorie;
  console.log(notRecProducts, dailyCalorie);

  // const dataApi = useSelector(state => state.diary.data);
  // const { caloricityPerDay, date} = dataApi.data;
  // console.log(caloricityPerDay, date);

  const leftCalories = dailyCalorie - dataArray.caloricityPerDay;
  const percentOfNormal = (leftCalories / dailyCalorie) * 100;

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
              {dataArray.consumedCalories > 0 ? dataArray.caloricityPerDay : 0}{' '}
              kcal{' '}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>Daily rate </Title>
            <Content> {dailyCalorie > 0 ? dailyCalorie : 0} kcal </Content>
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

        {dailyCalorie > 0 ? (
          <List>
            {notRecProducts.map(product => (
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
