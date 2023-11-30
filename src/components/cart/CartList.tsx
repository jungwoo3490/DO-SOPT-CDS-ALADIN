import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartItemProps } from '../../utils/CartItemProps';
import Book from './Book';
import styled from 'styled-components';
import { IcCheckboxGray, IcCheckboxFilled, IcDelete, IcHeartOff } from '../../assets/icons';

function CartList() {
  const { cartList } = useCart();
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);

  useEffect(() => {
    setIsCheckedList(Array(cartList.length).fill(true));
  }, [cartList]);

  const [isAllChecked, setIsAllChecked] = useState(true);

  useEffect(() => {
    const allChecked = isCheckedList.every(isChecked => isChecked);
    setIsAllChecked(allChecked);
  }, [isCheckedList]);

  const fillCheckedList = () => {
    setIsAllChecked(prev => !prev);
    setIsCheckedList(Array(cartList.length).fill(!isAllChecked));
  };
  return (
    <>
      <FilterWrapper>
        <CheckBox onClick={fillCheckedList}>
          <CheckWrapper>{isAllChecked ? <IcCheckboxFilled /> : <IcCheckboxGray />}</CheckWrapper>
        </CheckBox>
        <CheckText>전체 선택</CheckText>
        <ButtonWrapper>
          <Button>
            <IcHeartOff />
          </Button>
          <Button>
            <IcDelete />
          </Button>
        </ButtonWrapper>
      </FilterWrapper>
      {cartList.map((book: CartItemProps, index) => (
        <Book
          key={index}
          index={index}
          title={book.title}
          imgUrl={book.imgUrl}
          discountPrice={book.discountPrice}
          mileage={book.mileage}
          heart={book.heart}
          isCheckedList={isCheckedList}
          setIsCheckedList={setIsCheckedList}
        />
      ))}
    </>
  );
}
export default CartList;

const FilterWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 5.4rem;
  padding: 0rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const CheckBox = styled.div`
  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  margin: 0 1.4rem 0 1rem;
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 0.04rem;
`;

const CheckText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  margin-right: 1.2rem;
  padding: 0.3rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;
