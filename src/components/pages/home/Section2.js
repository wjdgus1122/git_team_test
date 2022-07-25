import styled from "styled-components";

const Section2Wrap = styled.div`
  border-top: 1px solid #5d5d5d;
  border-bottom: 1px solid #5d5d5d;
  padding: 0 500px;
`;
const Section2Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px;
  font-size: 30px;
  font-weight: 500;
`;

export const Section2 = () => {
  return (
    <Section2Wrap>
      <Section2Title>
        <span>무료 배송</span>
        <span>무상 A/S 제공</span>
        <span>배터리 2년 보증</span>
        <span>카드 무이자 할부</span>
      </Section2Title>
    </Section2Wrap>
  );
};
