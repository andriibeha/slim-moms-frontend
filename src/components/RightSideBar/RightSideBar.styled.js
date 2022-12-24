import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 12px 20px;
  background-color: #f0f1f3;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 80px 32px 40px 32px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 149px 94px 116px 94px;
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-right: 97px;
  }
`;

export const ListTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  text-align: start;
  margin-bottom: 20px;
`;

export const List = styled('ul')`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const CalcItem = styled.tr`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const PreContent = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
export const CalcTitle = styled.td`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 182px;
  }
`;
