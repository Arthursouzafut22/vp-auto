import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerModalMenu = styled.div`
  justify-content: space-between;
  /* border: 2px solid; */
  padding: 15px 20px;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 78px;
  right: 0;
  left: 0;
`;

export const NavLink = styled(Link)`
  color: #383b3e !important;
  transition: 0.3s all;
  padding: 3px 0px;
  user-select: none;

  &:hover {
    color: #2199dd !important;
  }
`;


export const NavLink2 = styled(Link)`
  color: #F64D4D !important;
  transition: 0.3s all;
  padding: 3px 0px;
  user-select: none;
  font-weight: bold;

`;

export const WrapperNavs1 = styled.div``;

export const WrapperNavs2 = styled.div``;

export const Wrapper1 = styled.div`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.3s all;

    &:hover {
      color: #2199dd !important;
    }
  }
`;

export const Wrapper2 = styled.div`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 4px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: 0.3s all;

    &:hover {
      color: #2199dd !important;
    }
  }
`;

export const Wrapper3 = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #383b3e;
    font-size: 18px;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 15px;
  }
`;

export const ContainerMenuMobile = styled.div`
  background-color: #e2e2e2;
  max-width: 320px;
  width: 100%;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Container1 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 8px;
`;

export const Container2 = styled.div`

 button{
    display: flex;
    align-items: center;
    border: 1px solid;
    border-radius: 10px;
    padding: 5px 8px;
    background-color: transparent;
    font-size: 15px;
 }


`;

export const ContainerButton = styled.div`
display: flex;
/* align-items: center; */
justify-content: end;
padding: 4px 0px;
margin-top: 4px;


  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const Linkk = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #383b3e ;
  padding: 5px 0px;

  &:hover {
    color: #2199dd !important;
  }
`;

export const ContainerLinks = styled.div`
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 5px 0px;
  margin-top: 6px;

  button {
    background-color: transparent;
    /* border: none; */
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
  }
`;

export const ContainerLinks2 = styled.div`
margin-top: 4px;
`;

export const HeaderMobile = styled.header``;

