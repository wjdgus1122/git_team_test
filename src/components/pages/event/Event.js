import styled from "styled-components";

const EventWrap = styled.div``;
const Section1 = styled.section`
  width: 100%;
  height: 80vh;
  padding: 280px;
  box-sizing: border-box;
`;
const TextWrap = styled.div``;
const Title = styled.div`
  font-size: 30px;
  font-weight: 100;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 100;
  color: #1d1d1d;
  line-height: 25px;
`;

export const Event = () => {
  return (
    <>
      <EventWrap>
        <Section1
          style={{
            background: `url(https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/markets/korea/rating-and-review/Owner_Review_Banner3.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920) no-repeat center/cover`,
          }}
        >
          <TextWrap>
            <Title>다이슨 리뷰 이벤트</Title>
            <Text>
              당신의 다이슨 테크놀로지 경험을 <br /> 리뷰로 공유해주세요.
            </Text>
          </TextWrap>
        </Section1>
      </EventWrap>
    </>
  );
};
