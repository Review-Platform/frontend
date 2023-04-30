import styled from "styled-components";

export const ModifyInfoContainer = styled.div`
  width: 1140px;
  height: 920px;
  padding: 61px 98px;
  background-color: #ffffff;
`;

export const FormArea = styled.form``;

export const InfoArea = styled.div``;

export const TitleArea = styled.div`
  width: 700px;
  padding-bottom: 16.68px;
  margin-bottom: 30px;
  border-bottom: 1px solid #000000;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Category = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 110px;
  margin-right: 40px;
`;

export const ImageArea = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 118px;
  height: 118px;
  margin-right: 9px;
`;

export const ImageButtonArea = styled.div`
  display: flex;
  align-items: flex-end;
  height: 118px;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export const ImageInput = styled.input`
  width: 90px;
  height: 34px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  margin: 0 4px;
  background-color: #ffffff;
`;

export const ImageInputLabel = styled.label`
  width: 90px;
  height: 34px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  margin: 0 4px;
  background-color: #ffffff;
  /* font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ImageDeleteButton = styled.button`
  width: 90px;
  height: 34px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  margin: 0 4px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const CategoryArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const NickInput = styled.input`
  width: 180px;
  height: 40px;
  font-size: 16px;
  padding: 10px 13px;
  border: 1px solid #b9b9b9;
`;

export const ModifyArea = styled.div`
  margin-bottom: 60px;
`;

export const PassWordInput = styled(NickInput)`
  width: 305px;
  margin-right: 10px;
`;

export const PassWordInputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span``;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e76100;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  width: 130px;
  height: 46px;
  font-size: 16px;
  font-weight: 500;
  margin: 0 7px;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  font-weight: 400;
  /* margin-left: 150px; */
  color: #ff5c00;
`;
