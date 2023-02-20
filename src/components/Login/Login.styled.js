import styled from "styled-components";

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
  background-color: #c9ac8c;
`;

export const BgImg = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const FormDiv = styled.div`
  width: 600px;
  /* Margin */
  padding: 75px 0;

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
