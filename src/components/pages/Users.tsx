import styled from 'styled-components';
import { SearchInput } from '../molecules/SerchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `ジャケ-${value}`,
    image:
      'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: '1233@.com',
    phone: '000-000-0000',
    company: {
      name: 'テスト',
    },
    website: 'https://google.com',
  };
});

export const Users = () => {
  const {userInfo,setUserInfo} = useContext(UserContext);
  const onClickSwitch= ()=>{
    setUserInfo({isAdmin: !userInfo.isAdmin})
  }
  return (
    <Scontainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
padding-top: 40px;
width: 100%;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
grid-gap: 20px;
`;
