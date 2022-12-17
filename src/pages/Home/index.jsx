// import Loader from 'components/Loader/Loader';
import { Logo } from 'components/Logo';
// import { Button } from 'components/Button';
import { Button } from 'components/Button';
import { AppNavigation } from 'components/Navigation';

export const Home = () => {
  return (
    <>
      <Logo />
      {/* <Loader /> */}
      <Button text="Hello" />
      {/* <Button text="Helloo" /> */}
      <AppNavigation />
    </>
  );
};
