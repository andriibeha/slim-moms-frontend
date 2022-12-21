import { removeProduct } from 'redux/products/products-operations';
import { ProductTitle, ProductProp, ExitBtn, Unit } from './DiaryItem.styled';
import sprite from 'images/icons.svg';

const { useDispatch } = require('react-redux');

export const DiaryItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('delete', product.id);
    dispatch(removeProduct(product.id));
  };

  return (
    <>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductProp>
        {product.weight}
        <span> g</span>
      </ProductProp>
      <ProductProp>
        {product.calories}
        <Unit> kcal</Unit>
      </ProductProp>

      <ExitBtn type="button" onClick={handleDelete}>
        <svg width="12px" height="12px">
          <use href={sprite + '#icon-cross_delete_12x12'} />
        </svg>
      </ExitBtn>
    </>
  );
};
