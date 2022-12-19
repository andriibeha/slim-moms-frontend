import { DiaryItem } from './DiaryItem';
// import productsSlice from 'redux/products/products-slice';
import { ListItem, List, ProductListBox } from './DiaryProductsList.styled';

const productsSlice = [
  {
    id: 1,
    title: 'Potato',
    weight: 100,
    calories: 625,
  },
  {
    id: 2,
    title: 'Tomato',
    weight: 100,
    calories: 500,
  },
  {
    id: 3,
    title: 'Cucumber',
    weight: 100,
    calories: 200,
  },
  {
    id: 4,
    title: 'Green Apple',
    weight: 100,
    calories: 200,
  },
  {
    id: 1,
    title: 'Potato',
    weight: 100,
    calories: 625,
  },
  {
    id: 2,
    title: 'Tomato',
    weight: 100,
    calories: 500,
  },
  {
    id: 3,
    title: 'Cucumber',
    weight: 100,
    calories: 200,
  },
  {
    id: 4,
    title: 'Green Apple',
    weight: 100,
    calories: 200,
  },
  {
    id: 1,
    title: 'Potato',
    weight: 100,
    calories: 625,
  },
  {
    id: 2,
    title: 'Tomato',
    weight: 100,
    calories: 500,
  },
  {
    id: 3,
    title: 'Cucumber',
    weight: 100,
    calories: 200,
  },
];

export const DiaryProductsList = () => {
  return (
    <ProductListBox>
      <List>
        {productsSlice.map(product => {
          return (
            <ListItem key={product.id}>
              <DiaryItem product={product} />
            </ListItem>
          );
        })}
      </List>
    </ProductListBox>
  );
};
