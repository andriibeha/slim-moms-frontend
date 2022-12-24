import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormLogIn, Input, Label, ErrorText } from './LoginForm.styled';
// import { logIn } from 'redux/login/operations';
import { logIn } from 'redux/auth/auth-operations';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters')
    .max(9, 'Password must be at most 8 characters')
    .required('Password is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    //const bloodType = JSON.parse(localStorage.getItem('bloodType'));
    dispatch(logIn({ email, password }));

    resetForm();
    localStorage.setItem('bloodType', JSON.stringify(''));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogIn autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="55px"
            gridGap="40px"
          >
            <Label htmlFor="email">
              Email *<Input type="email" name="email"></Input>
              <FormError name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              Password *<Input type="password" name="password"></Input>
              <FormError name="password" component="p" />
            </Label>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            gridGap={['20px', '32px']}
          >
            <ButtonAuth text="Log in"></ButtonAuth>
            <Link to="/registration">
              <ButtonLinkAuth text="Register"></ButtonLinkAuth>
            </Link>
          </Box>
        </FormLogIn>
      </Formik>
    </>
  );
};
