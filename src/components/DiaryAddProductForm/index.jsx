import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { Button } from '../Button';
import { Box } from 'components/Box';
import { ContainerForm, WeightInputStyled } from './DiaryAddProductForm.styled';
import { selectStyles } from './selectStyles';
import { useWindowResize } from 'hooks/useWindowResize';
import { addProduct } from 'redux/products/products-operations';

const data = [
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff555c',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553a',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5530',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5539',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff552c',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

export const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [errorProduct, setErrorProduct] = useState(false);
  const [errorWeight, setErrorWeight] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const { width } = useWindowResize();
  const dispatch = useDispatch();

  const handleChange = inputValue => {
    setSelectedOption(inputValue);
  };

  useEffect(() => {
    if (product.length >= 3) {
      const result = data.map(product => ({
        value: product._id,
        label: product?.title?.ua,
        calories: product.calories,
      }));
      console.log(result);
      setOptions(result);
    }
  }, [product]);

  useEffect(() => {
    if (weight !== '' || selectedOption !== '') {
      setErrorWeight(false);
      setErrorProduct(false);
    }
  }, [selectedOption, weight]);

  const postNewProduct = e => {
    e.preventDefault();
    if (selectedOption === '' && weight === '') {
      setErrorProduct(true);
      setErrorWeight(true);
      return;
    }
    if (weight === '') {
      setErrorWeight(true);
      return;
    }
    if (selectedOption === '') {
      setErrorProduct(true);
      return;
    }

    const newProduct = {
      productId: selectedOption.value,
      title: selectedOption.label,
      weight,
      caloriesBasic: selectedOption.calories,
    };
    dispatch(addProduct({newProduct}));

    console.log(newProduct);
    setProduct('');
    setWeight('');
    setSelectedOption('');
    setOptions([]);
  };

  const handleNumberValue = ({ target }) => {
    const { value } = target;
    setErrorWeight(false);
    setWeight(value);
  };

  return (
    <div>
      <ContainerForm onSubmit={postNewProduct}>
        <Box>
          <Select
            required
            value={selectedOption}
            onChange={handleChange}
            options={options}
            inputValue={product}
            onInputChange={setProduct}
            styles={selectStyles}
            placeholder="Enter product name"
          />
          {errorProduct ? (
            <p style={{ color: 'red' }}>Field "product" is required</p>
          ) : null}
        </Box>
        <Box>
          <WeightInputStyled
            name="weight"
            value={weight}
            autoComplete="off"
            onChange={handleNumberValue}
            type="input"
            placeholder="Gramms"
          />
          {errorWeight ? (
            <p style={{ color: 'red' }}>Field "weight" is required</p>
          ) : null}
        </Box>
        {width > 767 ? (
          <Button
            type="submit"
            text="+"
            radius="50%"
            w="48px"
            h="48px"
            font="20px"
          />
        ) : (
          <Button type="submit" text="Add" w="176px" h="44px" />
        )}
      </ContainerForm>
    </div>
  );
};
