import styled from "styled-components";

export const AuthWrap = styled.div`
  padding-top: 150px;
  padding-bottom: 80px;
  text-align: center;
`;

export const AuthTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #c9ac8c;
`;

export const TabWrap = styled.div``;

export const CatCard = styled.div`
  background: #f5f5f5;
  border-radius: 22px;
  width: 100%;
  max-width: 295px;
  max-height: 393px;
  text-align: start;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export const CardDesc = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

export const CardBody = styled.div`
  position: relative;
  padding: 12px 0 63px 16px;
`;

export const CardBottomImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const CardTopImg = styled.img`
  position: absolute;
  top: -20%;
  right: 0;
`;
