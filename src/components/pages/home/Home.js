import styled from "styled-components";
import { Section1 } from "./Section1";
import { mainStyle } from "../../../style/GlobalStyle";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

const HomeAllWrap = styled.div``;

export const Home = () => {
  return (
    <HomeAllWrap>
      <Section1 />
      <Section2 />
      <Section3 />
    </HomeAllWrap>
  );
};
