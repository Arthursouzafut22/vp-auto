import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 100;

  span :hover {
    color: red;
  }
`;

export const NavLink = styled(Link)`
  transition: 0.3s all;
  user-select: none;

  &:hover {
    color: #2199dd !important;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span:hover {
    color: #2199dd;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: #2199dd;
  }

  a {
    color: #383b3e !important;
  }

  span {
    font-size: 16px;
    display: block;
    user-select: none;
    margin: 0;
  }
`;

export const ContainerRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: #2199dd;
  }

  p {
    line-height: 20px;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  /* gap: 18px; */

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  border: 1px solid #ff4c00;
  width: 18px;
  height: 38px;
  border-radius: 10px;
  padding: 3px;

  div {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #ff4c00;
  }
`;

export const HeaderMobile = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0 0 20px 0 rgba(46, 40, 64, 0.5);
`;