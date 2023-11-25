import {FaCartArrowDown} from 'react-icons/fa6'

import {
  NavContainer,
  HeaderContainer,
  ReecoSide,
  ReccoSideHead,
  CartSide,
  CartSideHead,
  OrderCard,
  OrderUl,
  OrderSide,
  OrderSideHead,
  OrderSpan,
  OrderSideNumber,
  ButtonSide,
  BackButton,
  ApproveButton,
} from './styledComponents'

import './index.css'

const Header = () => (
  <>
    <NavContainer>
      <HeaderContainer>
        <ReecoSide>
          <span className="span">Recco</span>

          <ReccoSideHead>Store</ReccoSideHead>
          <ReccoSideHead>Orders</ReccoSideHead>
          <ReccoSideHead>Analytics</ReccoSideHead>
        </ReecoSide>

        <CartSide>
          <CartSideHead>Hello James ^</CartSideHead>
          <FaCartArrowDown class="icons" />
        </CartSide>
      </HeaderContainer>
    </NavContainer>
    <OrderCard>
      <OrderUl>
        <OrderSide>
          <OrderSideHead>
            Order : <OrderSpan>Order 32457ABC</OrderSpan>
          </OrderSideHead>
          <OrderSideNumber>Order 3245ABC</OrderSideNumber>
        </OrderSide>

        <ButtonSide>
          <BackButton>Back</BackButton>
          <ApproveButton>Approve Order</ApproveButton>
        </ButtonSide>
      </OrderUl>
    </OrderCard>
  </>
)

export default Header
