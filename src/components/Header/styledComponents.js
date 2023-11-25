import styled from 'styled-components'

export const BgContainer = styled.div``

export const NavContainer = styled.nav`
  background-color: #00563b;
  padding: 10px;
`

export const HeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`

export const ReecoSide = styled.li`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const CartSide = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  width: 25%;
`
export const CartSideHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-right: 20px;
  margin-top: 5px;
  color: #f1f1f1;
  cursor: pointer;
`

export const ReccoSideHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 20px;
  margin-top: 5px;
  color: #f1f1f1;
  cursor: pointer;
`
export const OrderCard = styled.div`
  background-color: #ffff;
  padding: 10px;
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2);
`

export const OrderUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`

export const OrderSide = styled.li`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const OrderSideHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 20px;
  margin-top: 5px;
  color: #000000;
  cursor: pointer;
`

export const OrderSpan = styled.span`
  text-decoration: underline;
  color: #000000;
  font-family: 'Roboto';
  font-size: 25px;
  margin-left: 6px;
`
export const OrderSideNumber = styled.span`
  color: #000000;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
`

export const ButtonSide = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
`

export const BackButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  color: #00563b;
  height: 40px;
  width: 60px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #00563b;
  margin-right: 20px;
  font-weight: bold;
`

export const ApproveButton = styled.button`
  font-family: 'Roboto';
  background-color: #00563b;
  color: #ffff;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-right: 20px;
  font-weight: bold;
`
