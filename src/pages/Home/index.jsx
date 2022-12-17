// import Loader from 'components/Loader/Loader';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';

export const Home = () => {
  return (
    <>
      <Logo />
      {/* <Loader /> */}
      <Button text="Hello" w="182px" h="44px" color="#FC842D" bg="white" />
    </>
  );
};
