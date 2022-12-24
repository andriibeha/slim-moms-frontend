import {
  BackgroundStyled,
  ImgLeaves,
  ImgLeavesTablet,
} from './BarBackground.styled';
import {
  Leaves1,
  Leaves2,
  LeavesTablet1,
  LeavesTablet2,
} from './BarBackgroundImg';

export const BarBackground = ({ children }) => {
  return (
    <BackgroundStyled>
      <ImgLeaves alt="im" src={Leaves1} srcSet={`${Leaves2} 2x`} />

      {/* Tablet------------------------------------------------------------- */}

      <ImgLeavesTablet
        alt="im"
        src={LeavesTablet1}
        srcSet={`${LeavesTablet2} 2x`}
      />
      {children}
    </BackgroundStyled>
  );
};
