import styled from 'styled-components';
export const UserIcon = (props) => {
  const { image, name } = props;
  return (
    <Scontainer>
      <div>
        <SImage height={160} src={image} alt="ピロフュ" />
        <SName>{name}</SName>
      </div>
    </Scontainer>
  );
};
const Scontainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
