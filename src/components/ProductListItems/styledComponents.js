import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffff;
  border: 1px solid #000000;

  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 0px;
  }
`

export const ProductList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
`

export const ProductHead = styled.h1``

export const Brand = styled.p`
  font-size: '20px';
  color: #000000;
  font-family: 'Roboto';
`

export const Price = styled.p`
  font-size: '20px';
  color: #000000;
  font-family: 'Roboto';
`

export const Quantity = styled.p`
  font-size: '20px';
  color: #000000;
  font-family: 'Roboto';
`

export const Total = styled.p`
  font-size: '20px';
  color: #000000;
  font-family: 'Roboto';
`

export const Status = styled.p`
  font-size: '20px';
  color: #000000;
  font-family: 'Roboto';
`
