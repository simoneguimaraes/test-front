import React from 'react'
import { useCheckoutContext } from '../../contexts/Checkout'
import * as S from './styled'
import Navbar from '../../components/Navbar'
import ProductItem from '../../components/ProductItem'
import ProductList from '../../components/ProductList'
import CardContainer from '../../components/CardContainer'
import Container from '../../components/Container'
import Button from '../../components/Button'

const CartPage = () => {
  const { isLoading, prices, products } = useCheckoutContext()

  const cartPageText = {
    containerTitle: 'Produtos',
    buttonText: 'Seguir para o pagamento'
  }

  return (
    <>
      <Navbar step={0} />
      <Container>
        {isLoading}
        {products.length > 0 && (
          <>
            <S.ProductButtonContainer>
              <CardContainer title={cartPageText.containerTitle}>
                {products.map((currentProduct, i) => (
                  <ProductItem key={i} product={currentProduct.product} />
                ))}
              </CardContainer>

              <ProductList prices={prices} />
              <Button text={cartPageText.buttonText} step="1" path="/payment" />
            </S.ProductButtonContainer>
          </>
        )}
      </Container>
    </>
  )
}

export default CartPage
