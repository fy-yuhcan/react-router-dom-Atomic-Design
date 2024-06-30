import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users", { state: { isAdmin: true } });
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users", { state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

