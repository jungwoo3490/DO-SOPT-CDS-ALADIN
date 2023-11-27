import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/detail';

function DetailBookContents() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  return (
    <DetailBookContentsWrapper>
      <Title1BoldText>목차</Title1BoldText>
      <Body2Text>{hideText(DETAIL_TEXTS.CONTENTS, 150)}</Body2Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailBookContentsWrapper>
  );
}

export default DetailBookContents;

const DetailBookContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 14.6rem;
  padding: 2.4rem 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.p`
  margin-top: 1.6rem;
  height: 5.88rem;
  white-space: pre-wrap;
  font: ${({ theme }) => theme.fonts.body2};
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;

  -webkit-box-orient: vertical;
`;

const MoreBox = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  bottom: 0;
  left: 0;

  height: 8rem;
  width: 100%;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

  & > svg {
    position: absolute;
    bottom: 0;
  }
`;
