import { NavLink } from "react-router-dom";



import styled from 'styled-components'
import { color, space, layout } from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${layout}
`

export default Box



export const RegistrationForm = () => {
  return (
    <>
    <Box color="#fff" bg="tomato" m="0" height="261px" mt="120px">
      <h1>Реєстрація</h1>

      <form>
        <ul>
          <li>
            <label htmlFor="name">Ім'я *</label>
            <input
              id="name"
              name="name"
              type="text"
              
            />      
          </li>
          <li>
            <label htmlFor="email">Електронна пошта *</label>

            <input
              id="email"
              name="email"
              type="text"         
            />
          </li>

          <li>
            <label htmlFor="password">Пароль *</label>

            <input
              id="password"
              name="password"
            />
            

            
          </li>
          </ul>
            </form>
 </Box>
        <Box bg="green" height="108px">
          <button type="submit">Зареєструватися</button>

          <NavLink to="/login">Увійти</NavLink>
        </Box>
    
     
      </>
  );
};
