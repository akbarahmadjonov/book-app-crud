import styled from "styled-components";

export const Block = styled.div``;

export const AuthorWrapper = styled.div`
  display: flex;
`;

export const AuthorImage = styled.img`
  border-radius: 20px;
  object-fit: cover;
`;

export const AurhorInfo = styled.div`
  margin-top: 45px;
  margin-left: 65px;
  width: 100%;
  max-width: 671px;
`;

export const AuthorName = styled.h2`
  margin: 0;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #d1b89d;
`;

export const AuthorBio = styled.p`
  margin: 8px 0 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.8);
`;

export const DateWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 54px;
`;

export const DateBlock = styled.div`
  margin-top: 44px;
`;

export const AuthorText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(13, 13, 13, 0.6);
`;

export const DateText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #d1b89d;
`;

export const Minus = styled.span`
  position: absolute;
  top: 57%;
  left: 105px;
  margin: auto;
  display: block;
  width: 22px;
  height: 3px;
  background-color: #d1b89d;
`;

// Books and Slider

export const BooksWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const BooksTitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 31px;
  line-height: 46px;
  color: #d1b89d;
`;
