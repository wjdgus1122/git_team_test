import styled from "styled-components";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

const Container = styled.div``;

export const Products = () => {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  );
};
