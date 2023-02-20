import styled from "styled-components";
import CameraFile from "../../../../assets/images/camera-file-upload.svg";

export const Thumb = styled.div`
  width: 993px;
  display: flex;
  margin: 0 auto;
  margin-top: 85px;
`;

export const UploadWrapper = styled.div``;

// Form
export const InputFile = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  color: transparent;

  &::after {
    content: "";
    width: 60px;
    height: 60px;
    background-image: url(${CameraFile});
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    position: absolute;
    top: 280px;
    left: 380px;
    cursor: pointer;
  }
`;

export const UserImage = styled.img`
  position: relative;
  width: 180px;
  height: 180px;
  position: absolute;
  left: 200px;
  border-radius: 10%;
`;

export const FormWrapper = styled.div``;

export const FormTitle = styled.h2`
  margin: 0;
  margin-bottom: 32px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
`;

export const Input = styled.input`
  width: 707px;
  display: block;
  margin-top: 7px;
  padding: 12px 0 12px 19px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;
  background-color: #f3f6f9;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;

  &:focus {
    background-color: #fff;
    border: 1px solid #333;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  border-top: 3px solid #ecf0f3;
`;

export const ButtonSubmit = styled.button`
  margin-top: 32px;
  display: block;
  margin-left: auto;
  padding: 12px 20px;

  background: #152540;
  border: none;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;

  &:hover {
    background-color: #203a66;
    transition: all 0.2s ease;
    transform: translateY(-5px);
  }
`;

export const InputParagraph = styled.p`
  /* font-size: 1px; */
  color: #dc3545;
  font-family: "Roboto", sans-serif;
`;
