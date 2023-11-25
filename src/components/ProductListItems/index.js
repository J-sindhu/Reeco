import {
  BgContainer,
  ProductList,
  ProductHead,
  Brand,
  Price,
  Quantity,
  Total,
  Status,
} from './styledComponents'

import './index.css'

const ProductListItems = props => {
  const {productData} = props
  const {productName, brand, price, quantity, total, status} = productData
  return (
    <BgContainer>
      <ProductList>
        <ProductHead>{productName}</ProductHead>
        <hr className="line" />
        <Brand>{brand}</Brand>
        <hr className="line" />
        <Price>{price}</Price>
        <hr className="line" />
        <Quantity>{quantity}</Quantity>
        <hr className="line" />
        <Total>{total}</Total>
        <hr className="line" />
        <Status>{status}</Status>
        <hr className="line" />
        Edit
      </ProductList>
    </BgContainer>
  )
}

export default ProductListItems
