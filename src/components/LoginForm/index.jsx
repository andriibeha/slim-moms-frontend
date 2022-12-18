import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormLogIn, Input, Label, ErrorText } from './LoginForm.styled';
import { logIn } from 'redux/login/operations';

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
    .max(8, 'Password must be at most 8 characters')
    .required('Password is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogIn autoComplete="off">
          <Label htmlFor="email">
            <Input type="email" name="email" placeholder="Email *"></Input>
            <FormError name="email" component="p" />
          </Label>
          <Label htmlFor="password">
            <Input
              type="password"
              name="password"
              placeholder="Password *"
            ></Input>
            <FormError name="password" component="p" />
          </Label>
          <button type="submit">Log in</button>
          <button type="button">Register</button>
        </FormLogIn>
      </Formik>
    </>
  );
};
