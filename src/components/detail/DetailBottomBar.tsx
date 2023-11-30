import React from 'react';
import styled from 'styled-components';
import { IcGift, IcHeartOff, IcHeartOn } from '../../assets/icons';
import { useCart } from '../../hooks/useCart';

interface DetailBottomBarProps {
  bookId: number;
  heartOn: boolean;
  handleHeartClick: () => Promise<void>;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

function DetailBottomBar({
  bookId,
  heartOn,
  handleHeartClick,
  setToast,
  setToastMessage,
}: DetailBottomBarProps) {
  const { response, addToCart } = useCart();

  const handleAddToCart = async () => {
    await addToCart(bookId);
    setToastMessage(response);
    setToast(true);
  };

  return (
    <DetailBottomWrapper>
      <ButtonsWrapper>
        <ButtonImageWrapper onClick={handleHeartClick}>
          {heartOn ? <IcHeartOn /> : <IcHeartOff />}
        </ButtonImageWrapper>
        <ButtonImageWrapper>
          <IcGift />
        </ButtonImageWrapper>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <GiftButton onClick={handleAddToCart}>장바구니</GiftButton>
        <BuyButton>구매하기</BuyButton>
      </ButtonsWrapper>
    </DetailBottomWrapper>
  );
}
export default DetailBottomBar;

const DetailBottomWrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  column-gap: 0.7rem;
  align-items: center;

  height: 6.8rem;
  padding: 1.6rem;

  background: ${({ theme }) => theme.colors.white};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.4rem;
`;

const ButtonImageWrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;

const GiftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 12.4rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.pink_400};
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title2_bold};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const BuyButton = styled(GiftButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.pink_400};
  border: none;
`;
