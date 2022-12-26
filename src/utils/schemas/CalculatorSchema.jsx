import * as Yup from 'yup';

const calculatorSchema = Yup.object().shape({
  height: Yup.number()
    .min(145, 'Very little...')
    .typeError('Height must be a number!')
    .positive()
    .integer('Put your height in a number')
    .max(230, 'A lot...')
    .required('Fill all the fields!'),
  age: Yup.number()
    .min(6, 'Very little...')
    .typeError('Age must be a number!')
    .positive()
    .integer()
    .max(110, 'A lot...')
    .required('Fill all the fields!'),
  cWeight: Yup.number()
    .min(35, 'Very little...')
    .typeError('Weight must be a number!')
    .positive()
    .integer()
    .max(300, 'A lot...')
    .required('Fill all the fields!'),
  dWeight: Yup.number()
    .min(35, 'Very little...')
    .typeError('Desired weight must be a number!')
    .positive()
    .integer()
    .max(300, 'A lot...')
    .required('Fill all the fields!'),
  blood: Yup.string().required('Choose your blood type!')
});

export default calculatorSchema;