import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  margin-top: 185px;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #C9AC8C;
`
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 54px;
  margin: 22px 0 0;
  padding: 0;
  list-style-type: none;
`
export const Item = styled.li`
  
`

export const CategoryLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  color: rgba(13, 13, 13, 0.6);
`