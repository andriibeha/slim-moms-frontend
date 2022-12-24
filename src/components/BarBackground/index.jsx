
import {
    BackgroundStyled, ImgLeaves,
    ImgLeavesTablet
} from './BarBackground.styled';
import { Leaves1, Leaves2, Leaves3, LeavesTablet1, LeavesTablet2, LeavesTablet3 } from './BarBackgroundImg';



export const BarBackground = ({ children }) => {
    return <BackgroundStyled>

        <ImgLeaves
              alt='im'
            src={Leaves1}            
  srcSet={`${Leaves2} 2x, ${Leaves3} 3x`}
  
            
        />

        {/* Tablet------------------------------------------------------------- */}
        

    
        <ImgLeavesTablet
              alt='im'           
             src={LeavesTablet1}
  srcSet={`${LeavesTablet2} 2x, ${LeavesTablet3} 3x`}
  
        />
        {children}
    </BackgroundStyled>;
};