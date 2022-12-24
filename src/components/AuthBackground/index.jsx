import {
  BackgroundStyled,
  ImgBanana,
  ImgLeav,
  ImgStraw,
  ImgShadow,
  ImgBananaTablet,
  ImgLeavTablet,
  ImgStrawTablet,
  ImgShadowTablet,
} from './AuthBackground.styled';

import {
  banana12,
  banana22,
  leaves1,
  leaves2,
  strawberry1,
  strawberry2,
  strawberry3,
  shadow1,
  bananaTablet1,
  bananaTablet2,
  leavesTablet2_1,
  leavesTablet2_2,
  strawberryTablet1,
  strawberryTablet2,
  shadowTablet,
} from './AuthBackgroundImg';

export const AuthBackground = ({ children }) => {
  return (
    <BackgroundStyled>
      <ImgBanana
        alt="im"
        src={banana12}
        srcSet={`${banana22} 2x`}
        media="(min-width: 1280px)"
      />
      <ImgLeav
        alt="im"
        src={leaves1}
        srcSet={`${leaves2} 2x`}
        media="(min-width: 1280px)"
      />
      <ImgStraw
        height={279}
        width={286}
        alt="im"
        src={strawberry1}
        srcSet={`${strawberry2} 2x, ${strawberry3} 3x`}
        media="(min-width: 1280px)"
      />
      <ImgShadow alt="im" src={shadow1} media="(min-width: 1280px)" />

      {/* Tablet------------------------------------------------------------- */}

      <ImgBananaTablet
        alt="im"
        media="(min-width: 768px)"
        src={bananaTablet1}
        srcSet={`${bananaTablet2} 2x`}
      />
      <ImgLeavTablet
        alt="im"
        media="(min-width: 768px)"
        src={leavesTablet2_1}
        srcSet={`${leavesTablet2_2} 2x`}
      />
      <ImgStrawTablet
        alt="im"
        media="(min-width: 768px)"
        src={strawberryTablet1}
        srcSet={`${strawberryTablet2} 2x`}
      />
      <ImgShadowTablet alt="im" media="(min-width: 768px)" src={shadowTablet} />
      {children}
    </BackgroundStyled>
  );
};
