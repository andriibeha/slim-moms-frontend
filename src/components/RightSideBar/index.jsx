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
import { diarySelectors } from 'redux/diary/diarySelectors';
import { useSelector } from 'react-redux';

export const RightSideBar = () => {
  const { user } = useAuth();
  const notRecProducts = user.data.user.notRecProducts;
  notRecProducts.slice(0,5)
  console.log(notRecProducts)

  const dailyCalorie = user.data.user.dailyCalorie;
  console.log(notRecProducts, dailyCalorie);

  const caloricityPerDay = useSelector(diarySelectors.selectCaloricityPerDay);
  const returnedDate= useSelector(diarySelectors.selectReturnedDate);
  const selectedDate = useSelector(diarySelectors.selectDate);
  const date = new Date(returnedDate).toLocaleString('').slice(0,10);
  const normalizedSelectedDate = new Date(selectedDate).toLocaleString('').slice(0,10);

  console.log(returnedDate);
  console.log(caloricityPerDay, date);

  const leftCalories = dailyCalorie - caloricityPerDay;
  const percentOfNormal = (leftCalories / dailyCalorie) * 100;

  return (
    <Box>
      <BoxList>
        <ListTitle>Summary for {caloricityPerDay==="null" ? date : normalizedSelectedDate}</ListTitle>
        <Container>
          <ContainerItem>
            <Title>Left</Title>
            <Content>{leftCalories > 0 ? leftCalories : 0} kcal</Content>{' '}
          </ContainerItem>
          <ContainerItem>
            <Title>Consumed</Title>
            <Content>
              {caloricityPerDay  > 0 ? caloricityPerDay : 0}{' '}
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
