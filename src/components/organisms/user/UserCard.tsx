import styled from 'styled-components';
import { Card } from '../../atoms/card/card';
import { UserIcon } from '../../molecules/user/UserIcon';
import { memo } from 'react';
export const UserCard = memo((props) => {
  const { user } = props;
  return (
    <Card>
      <UserIcon image={user.image} name={user.name} />
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>tel</dt>
          <dd>{user.phone}</dd>
          <dt>会社</dt>
          <dd>{user.company.name}</dd>
          <dt>サイト</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDl>
    </Card>
  );
});
const SDl = styled.dl`
 text-align: left;
 margin-bottm:0px;
 dt{
   float:left;
 }
 dd{
   padding-left:32px;
   padding-bottom:8px;
   overflow-wrap: break-word;
 }
 `;
