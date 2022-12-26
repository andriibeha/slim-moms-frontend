import { useEffect } from 'react';
import { DiaryItem } from './DiaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { getByDate } from 'redux/diary/diaryOperations';
import { diarySelectors } from 'redux/diary/diarySelectors';

import { ListItem, List, ProductListBox } from './DiaryProductsList.styled';

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
