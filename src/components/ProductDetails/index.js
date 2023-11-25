import {BgContainer, BgList, Suppliers, Head, Span} from './styledComponents'

const ProductDetails = () => (
  <BgContainer>
    <BgList>
      <Suppliers>
        <Head>Supplier</Head>
        <Span>East Coast Fruits & vegetables</Span>
      </Suppliers>
      <hr className="line" />

      <Suppliers>
        <Head>Shipping Date</Head>
        <Span>Thu,Feb 10</Span>
      </Suppliers>
      <hr className="line" />

      <Suppliers>
        <Head>Total</Head>
        <Span>$ 15,000.7</Span>
      </Suppliers>
      <hr className="line" />

      <Suppliers>
        <Head>Department</Head>
        <Span>300-444-678</Span>
      </Suppliers>
      <hr className="line" />

      <Suppliers>
        <Head>Status</Head>
        <Span>Awaiting Your approve!</Span>
      </Suppliers>
      <hr className="line" />
    </BgList>
  </BgContainer>
)

export default ProductDetails
