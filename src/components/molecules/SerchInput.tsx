import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';
import { memo } from 'react';

const SearchInputComponent = () => {
  return (
    <SContainer>
      <Input placeholder="検索" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

export const SearchInput = memo(SearchInputComponent);

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

