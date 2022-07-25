import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";

const HomeWrap = styled.div`
  width: 100%;
  height: 80vh;
`;
const HomeTitle = styled.div`
  font-size: 60px;
  font-weight: 900;
  color: ${mainStyle.mainColor};
  padding: 300px 0 0 300px;
`;

const HomeCon = styled.p`
  font-size: 30px;
  padding: 30px 0 0 300px;
`;

export const Section1 = () => {
  return (
    <HomeWrap
      style={{
        background: `url(https://dyson-h.assetsadobe2.com/is/image//content/dam/dyson/leap-petite-global/shop/fc-shop-all-hero.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920) no-repeat center / cover`,
      }}
    >
      <HomeTitle>Dyson</HomeTitle>
      <HomeCon>
        더 깊은 곳까지 청소하는 강력한 퍼포먼스. <br />
        일상 청소를 편리하게 해주는 다양한 무선 기능까지.
      </HomeCon>
    </HomeWrap>
  );
};
