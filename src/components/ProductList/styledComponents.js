import styled from 'styled-components'

export const ProductContainer = styled.div`
  background-color: #ffff;
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 0px;
  }
`

export const SearchCard = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`

export const Subcard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonCard = styled.div``

export const SearchInput = styled.input`
  width: 300px;
  border-radius: 20px;
`

export const SearchContainer = styled.button`
  width: 50px;
  height: 30px;
`

export const Button = styled.button`
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

export const ProductNameList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 30px;
`
