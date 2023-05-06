import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Row1 = styled.div`
  height: 412px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ServiceIntroBgBox = styled.div`
  width: 51vw;
  min-width: 613px;
  height: 412px;
  background-color: #ffefdf;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

export const ServiceIntroBox = styled.div`
  width: 613px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServiceName = styled.div`
  color: #ff2617;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 46px;
  line-height: 67px;
  margin-top: 70px;
  margin-right: 233px;
  margin-bottom: 11px;
`;

export const ServiceIntro = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin-top: 14px;
  white-space: pre-line;
  width: 482px;
  height: 50px;
`;
export const ServiceIntroBottomBelt = styled.img`
  width: 51vw;
  min-width: 613px;
  height: 40px;
  position: absolute;
  top: 372px;
  left: 0;
`;

export const BrandImgs = styled.div`
  width: 230px;
  height: 412px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 51vw;
`;

export const BrandImg = styled.img`
  width: 230px;
  height: 206px;
`;

export const IfYouHadBox = styled.div`
  width: calc(100vw - (230px + 51vw));
  min-width: 357px;
  height: 100%;
  background-color: #ff623b;
  position: absolute;
  right: 0;
`;

export const IfYouHad = styled.div`
  margin-left: 40px;
  margin-top: 126px;
  width: 357px;
  color: #fff0de;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
  white-space: pre-line;
`;

/////////////Row2/////////////////
export const Row2 = styled.div`
  width: 100vw;
  height: 704px;
  display: flex;
  justify-content: center;
  background-color: #fffaf5;
`;
export const SnackRecord = styled.div`
  width: 1200px;
  height: 704px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  position: relative;
`;
export const SnackRecordIntroContainer = styled(motion.div)`
  display: flex;
  margin-top: 4px;
  height: auto;
  width: auto;
  border-bottom: 1px solid #ff2617;
  gap: 122px;
`;

export const SnackRecordIntroContainerCol1 = styled.div`
  margin-top: 40px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const SnackRecordTitle = styled.div`
  width: 260px;
  height: 52px;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #397f03;
`;

export const SnackRecordIntro = styled.div`
  height: 60px;
  margin-top: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
`;
export const SnackRecordLink = styled.div`
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  height: 22px;
  cursor: pointer;
  margin-bottom: 3px;
`;
export const RightArrow = styled.span`
  color: #ff2617;
`;

export const SnackRecordLinkBorder = styled.div`
  border-bottom: 1px solid #6b3801;
  width: 133px;
  height: 0;
  margin-bottom: 48px;
`;

export const BorderRight = styled(motion.div)`
  width: 0;
  height: 140px;
  border-left: 3px solid #ffce88;
  position: absolute;
  top: 56px;
  left: 449px;
`;
export const SnackRecordIntroContainerCol2 = styled.div`
  margin-top: 81px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const SnackAwardTitle = styled.div`
  color: #ff8a3b;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  white-space: pre-line;
`;
export const SnackAwardIntro = styled.div`
  margin-top: 17px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
`;

export const ReviewContainer = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const ReviewTitle = styled.div`
  color: #ff2617;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
`;
export const ReviewIntro = styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
`;
export const ReviewLink = styled.div`
  margin-top: 22px;
  width: auto;
  height: 22px;
  margin-bottom: 3px;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  cursor: pointer;
`;
export const ReviewLinkBorder = styled.div`
  border-bottom: 1px solid #6b3801;
  width: 58px;
  height: 0;
  margin-bottom: 30px;
`;
export const ReviewExampleContainer = styled.div`
  width: 888px;
  height: 218px;
  display: flex;
  align-items: center;
`;
export const ReviewBoxWrapper = styled.div`
  width: 808px;
  height: 218px;
  pointer-events: none;
`;
export const ReviewArrowBtn = styled.button`
  margin-left: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #ff2617;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #ffead9;
  color: #ff2617;
  cursor: pointer;
`;
export const Row2BottomBeltContainer = styled.div`
  width: 100vw;
  height: 40px;
  background-color: #ff8a3b;
  display: flex;
  justify-content: center;
`;
export const Row2BottomBelt = styled.img`
  width: 1200px;
  height: 40px;
`;
export const Row3 = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 380px;
  background-color: #ffefdf;
`;
export const RoutineContainer = styled(motion.div)`
  width: 1200px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
export const RoutineTitle = styled.div`
  color: #397f03;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
`;
export const TitleBorder = styled.div`
  margin-top: 12px;
  width: 320px;
  height: 0;
  border-bottom: 2px solid #ff8a3b;
`;
export const RoutineIntro = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #7a4c00;
  white-space: pre-line;
`;
export const RoutineImgContainer = styled.div`
  width: auto;
  height: 186px;
  display: flex;
  margin-top: 30px;
`;
export const RoutineImg = styled.img`
  width: 134.26px;
  height: 186px;
  margin-right: 12.06px;
`;
export const BottomBox = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #ff8a3b;
`;
