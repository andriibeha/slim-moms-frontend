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
  const dailyCalorie = user.data.user.dailyCalorie;

  const caloricityPerDay = useSelector(diarySelectors.selectCaloricityPerDay);
  const selectedDate = useSelector(diarySelectors.selectDate);
  const normalizedSelectedDate = new Date(selectedDate)
    .toLocaleString('')
    .slice(0, 10);
    const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
    console.log(date.toLocaleString());
  const leftCalories = dailyCalorie - caloricityPerDay;
  const percentOfNormal = (caloricityPerDay / dailyCalorie) * 100;

  return (
    <Box>
      <BoxList>
        <ListTitle>Summary for {normalizedSelectedDate}</ListTitle>
        <Container>
          <ContainerItem>
            <Title>Left</Title>
            <Content>
              {caloricityPerDay > 0 ? leftCalories : 0} kcal
            </Content>{' '}
          </ContainerItem>
          <ContainerItem>
            <Title>Consumed</Title>
            <Content>
              {caloricityPerDay > 0 ? caloricityPerDay : 0} kcal{' '}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>Daily rate </Title>
            <Content> {dailyCalorie > 0 ? dailyCalorie : 0} kcal </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>% of normal</Title>
            <Content>
              {caloricityPerDay > 0 ? Math.round(percentOfNormal) : 0} %
            </Content>
          </ContainerItem>
        </Container>
      </BoxList>
      <BoxList>
        <ListTitle>Food not recommended</ListTitle>
        {caloricityPerDay > 0 ? (
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
