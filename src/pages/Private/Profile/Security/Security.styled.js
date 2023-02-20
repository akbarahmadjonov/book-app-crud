import styled from "styled-components";

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Form
export const InputFile = styled.input``;

export const FormWrapper = styled.div`
  margin-top: 85px;
`;

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
`;

export const ButtonSubmit = styled.button`
  margin-top: 32px;
  display: block;
  margin-right: auto;
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