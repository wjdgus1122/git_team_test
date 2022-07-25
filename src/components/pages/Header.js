import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";

const Wrap = styled.div`
  height: 80px;
  width: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyle.padding};
`;
const Logo = styled.h3`
  font-size: 30px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 900;
  margin-left: 30px;
`;

export const Header = () => {
  return (
    <Wrap>
      <Logo>LOGO</Logo>
      <MenuWrap>
        <Menu>menu</Menu>
        <Menu>menu</Menu>
        <Menu>menu</Menu>
      </MenuWrap>
    </Wrap>
  );
};
