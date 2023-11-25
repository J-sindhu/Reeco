import {Component} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Header from '../Header'
import ProductDetails from '../ProductDetails'
import ProductListItems from '../ProductListItems'

import {
  SearchCard,
  SearchInput,
  SearchContainer,
  ProductContainer,
  Button,
  ButtonCard,
  Subcard,
  ProductNameList,
} from './styledComponents'

const AllProductsList = [
  {
    id: 1,
    productName: 'sunflower oil',
    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
  {
    id: 2,
    productName: 'catter',
    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
  {
    id: 3,
    productName: 'biscuits',

    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
  {
    id: 5,
    productName: 'sunflower',

    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
  {
    id: 6,
    productName: 'breads',

    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
  {
    id: 4,
    productName: 'jam',
    brand: 'Hormel Black LabelMany',
    price: '$60.76 | 5 + 1LB',
    quantity: '0 * 6 * 1LB',
    total: '0',
    status: '',
  },
]

class ProductList extends Component {
  state = {
    searchInput: '',
  }

  onSearchButton = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <ProductDetails />
        <ProductContainer>
          <Subcard>
            <SearchCard>
              <SearchInput
                type="search"
                placeholder="search"
                data-testid="searchButton"
                value={searchInput}
                onChange={this.onSearchButton}
              />
              <SearchContainer
                data-testid="searchButton"
                onClick={this.getSearchResults}
              >
                <BiSearchAlt2 size="20" />
              </SearchContainer>
            </SearchCard>
            <ButtonCard>
              <Button>Add Items</Button>
            </ButtonCard>
          </Subcard>
          <ProductNameList>
            ProductName
            <hr className="line" />
            Brand
            <hr className="line" />
            Price
            <hr className="line" />
            Quantity
            <hr className="line" />
            Total
            <hr className="line" />
            Status
            <hr className="line" />
          </ProductNameList>
          <>
            {AllProductsList.map(eachItem => (
              <ProductListItems productData={eachItem} key={eachItem.id} />
            ))}
          </>
        </ProductContainer>
      </>
    )
  }
}

export default ProductList
