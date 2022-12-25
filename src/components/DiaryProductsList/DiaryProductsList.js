import { useEffect } from 'react';
import { DiaryItem } from './DiaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { getByDate } from 'redux/diary/diaryOperations';
import { diarySelectors } from 'redux/diary/diarySelectors';

import { ListItem, List, ProductListBox } from './DiaryProductsList.styled';

// const productsSlice = [
//   {
//     id: 1,
//     title: 'Potato',
//     weight: 100,
//     calories: 625,
//   },
//   {
//     id: 2,
//     title: 'Tomato',
//     weight: 100,
//     calories: 500,
//   },
//   {
//     id: 3,
//     title: 'Cucumber',
//     weight: 100,
//     calories: 200,
//   },
//   {
//     id: 4,
//     title: 'Green Apple',
//     weight: 100,
//     calories: 200,
//   },
//   {
//     id: 5,
//     title: 'Potato',
//     weight: 100,
//     calories: 625,
//   },
//   {
//     id: 6,
//     title: 'Tomato',
//     weight: 100,
//     calories: 500,
//   },
//   {
//     id: 7,
//     title: 'Cucumber',
//     weight: 100,
//     calories: 200,
//   },
//   {
//     id: 8,
//     title: 'Green Apple',
//     weight: 100,
//     calories: 200,
//   },
//   {
//     id: 9,
//     title: 'Potato',
//     weight: 100,
//     calories: 625,
//   },
//   {
//     id: 10,
//     title: 'Tomato',
//     weight: 100,
//     calories: 500,
//   },
//   {
//     id: 11,
//     title: 'Cucumber',
//     weight: 100,
//     calories: 200,
//   },
// ];

export const DiaryProductsList = () => {
  const date = useSelector(diarySelectors.selectDate);
  const dispatch = useDispatch();
  const productsByDate = useSelector(diarySelectors.selectProductByDate);
  const isLoading = useSelector(diarySelectors.selectIsLoading);

  useEffect(() => {
    dispatch(getByDate(date));
  }, [date, dispatch]);

  return (
    <ProductListBox>
      {isLoading && <p>Loading...</p>}

      <List>
        {productsByDate?.length ? (
          productsByDate.map(product => (
            <ListItem key={product._id}>
              <DiaryItem product={product} />
            </ListItem>
          ))
        ) : (
          <p>No products found for this date</p>
        )}
      </List>
    </ProductListBox>
  );
};
