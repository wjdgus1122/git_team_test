import styled from "styled-components";

const Section3Wrap = styled.div`
  width: 100%;

  padding: 200px 300px;
  display: flex;
  justify-content: space-between;
`;
const Section3Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sec3Img = styled.div`
  width: 400px;
  height: 300px;
  background-color: #1d1d1d;
`;
const Sec3Title = styled.h5`
  font-size: 26px;
  font-weight: 500;
  margin-top: 5px;
`;
const Sec3Con = styled.p`
  width: 400px;
  margin-top: 5px;
  font-size: 20px;
`;

export const Section3 = () => {
  return (
    <Section3Wrap>
      <Section3Box>
        <Sec3Img />
        <Sec3Title>dyson v15</Sec3Title>
        <Sec3Con>
          레이저 디텍트 기술, 먼지에 따라 자동으로 세기 조절, 240AW 강력한
          흡입력
        </Sec3Con>
      </Section3Box>
      <Section3Box>
        <Sec3Img />
        <Sec3Title>dyson v15</Sec3Title>
        <Sec3Con>
          레이저 디텍트 기술, 먼지에 따라 자동으로 세기 조절, 240AW 강력한
          흡입력
        </Sec3Con>
      </Section3Box>
      <Section3Box>
        <Sec3Img />
        <Sec3Title>dyson v15</Sec3Title>
        <Sec3Con>
          레이저 디텍트 기술, 먼지에 따라 자동으로 세기 조절, 240AW 강력한
          흡입력
        </Sec3Con>
      </Section3Box>
    </Section3Wrap>
  );
};
