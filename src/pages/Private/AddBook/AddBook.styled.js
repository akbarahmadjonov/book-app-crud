import styled from "styled-components";
import Plus from "../../../assets/images/plus.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 600px;
  background: rgba(243, 243, 243, 0.93);
`;

export const BgImg = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const FormDiv = styled.div`
  width: 600px;
  /* Margin */
  padding: 75px 0;
  position: relative;

  font-family: "Open Sans", sans-serif;
`;

export const FormText = styled.p`
  /* Font styles */
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  color: #000000;
  font-family: "Roboto", sans-serif;
`;

export const FormLink = styled.a`
  /* Margin */
  margin-left: 2px;

  color: #549ff9;
  text-decoration: none;
`;

export const FormTitle = styled.h2`
  /* Margin */
  margin: 0;

  /* Font styles */
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;

  color: #000000;
`;

export const InputFields = styled.div``;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 370px;
  margin-top: 10px;
  padding: 5px 0;

  /* Custom styles */
  background-color: #152540;
  border-radius: 99px;
  border: none;
  text-align: center;
  cursor: pointer;
  color: #ffffff;

  font-weight: 500;
  font-size: 18px;
  line-height: 36px;

  :hover {
    background-color: #153540;
  }
`;

export const Input = styled.input`
  width: 370px;
  /* Padding, margin */
  margin: 10px 0;
  padding: 16px 0 16px 16px;

  /* Font styles */
  font-weight: 200;
  font-size: 14px;
  line-height: 16px;

  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  color: #333;
  outline: none;
  font-family: "Roboto", sans-serif;

  ::placeholder {
    color: #aaaaaa;
  }
`;

export const InputParagraph = styled.p`
  /* font-size: 1px; */
  color: #dc3545;
  font-family: "Roboto", sans-serif;
`;

export const FormSelect = styled.select`
  width: 370px;
  padding: 16px 0 16px 16px;
  font-weight: 200;
  font-size: 14px;
  border: 1px solid #b4b4bb;
  border-radius: 16px;
  outline: none;
  color: #555;
  font-family: "Roboto";
`;

export const FormOption = styled.option``;

export const FormTextarea = styled.textarea`
  width: 370px;
  padding: 16px 0 16px 16px;
  font-weight: 200;
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid #b4b4bb;
  outline: none;
  color: #555;
  font-family: "Roboto";
  margin: 10px 0;
`;

export const InputFile = styled.input`
  position: relative;
  width: 400px;
  height: 428px;
  background: #f8f8f8;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;
  cursor: pointer;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  color: transparent;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }

  &::before {
    content: "Click or drag file to this area to upload";
    display: inline-block;
    background-image: url(${Plus});
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 250px;
    height: 100px;
    background-position: center;
    font-weight: 400;
    line-height: 18px;
    font-size: 16px;
    color: #000000;
    opacity: 0.3;
  }
`;

export const UploadImg = styled.img`
  position: absolute;
  left: 50px;
  right: 0;
  bottom: 0;
  top: 50px;
`;

export const BackButton = styled.button`
  padding: 7px 10px;
  position: absolute;
  left: -270px;
  top: 20px;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-weight: 200;
  font-family: Poppins;
  border-radius: 5px;
`;

export const LogoutLink = styled.a`
  cursor: pointer;
  &:hover {
    background-color: #dc3545 !important;
    color: #fff;
  }
`;
