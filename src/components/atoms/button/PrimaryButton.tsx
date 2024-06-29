import styled from 'styled-components';
import { BaseButton } from './BaseButton';
export const PrimaryButton = (props) => {
  const { Children } = props;
  return <SButton>{Children}</SButton>;
};
const SButton = styled(BaseButton)`
 background-color: #40514e;
 `;
