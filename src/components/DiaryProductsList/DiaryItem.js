import { removeProduct } from 'redux/products/products-operations';
import { ProductTitle, ProductProp, ExitBtn, Unit } from './DiaryItem.styled';

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
        <svg width={10} height={10}>
          <use href="../../images/icons.svg#icon-cross_delete_12x12"></use>
        </svg>
      </ExitBtn>
    </>
  );
};
