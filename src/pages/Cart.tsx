import CartHeader from '../components/cart/CartHeader';
import Filter from '../components/cart/Filter';
import Nav from '../components/cart/Nav';
import CartList from '../components/cart/CartList';
import Receipt from '../components/cart/Receipt';
import BuyWith from '../components/common/BuyWith';
import AladinGoods from '../components/cart/AladinGoods';
import styled from 'styled-components';
import AladinCoffee from '../components/cart/AladinCoffee';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import BottomBar from '../components/cart/BottomBar';

function Cart() {
  return (
    <CartWrapper>
      <CartHeader />
      <Nav />
      <Filter />
      <CartList />
      <Receipt />
      <BuyWith />
      <AladinGoods />
      <AladinCoffee />
      <Footer />
      <BackButton />
      <BottomBar />
    </CartWrapper>
  );
}

export default Cart;

const CartWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding-bottom: 10.8rem;
`;
