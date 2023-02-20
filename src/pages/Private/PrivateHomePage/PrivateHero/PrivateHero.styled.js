import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 12%;
  left: 5%;
  width: 337px;
`;

export const TextTitle = styled.h2`
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  color: #d1b89d;
  font-family: "Josefin Slab", serif;
`;

export const BackgroundDiv = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.img``;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 80%;
  background: #ffffff;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const SearchTitle = styled.h2`
  margin: 0;
  margin-bottom: 29px;

  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const SearchInner = styled.div`
  padding: 32px 0;
`;

export const SearchOut = styled.div``;

export const SearchInput = styled.input`
  width: 710px;
  padding: 12px 0 12px 27px;
  background-color: #f5f5f5;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  border: none;
  outline: none;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(13, 13, 13, 0.3);
  }

  :focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;

export const SearchButton = styled.button`
  width: 160px;
  margin-left: 24px;
  padding: 12px 0 12px 0;
  background-color: #c9ac8c;
  border-radius: 15px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #efdac3;
  font-family: "Poppins", sans-serif;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
