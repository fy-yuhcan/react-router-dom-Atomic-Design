import styled from 'styled-components';
import { BaseButton } from './BaseButton';
export const SecondaryButton = (props) => {
  const { Children } = props;
  return <SButton>{Children}</SButton>;
};
const SButton = styled(BaseButton)`
 background-color: red;
 `;
