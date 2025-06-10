import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer``;

export const BoxDetalhes = styled.div`
  background-color: #383b42;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;

  @media screen and (max-width: 1027px) {
    flex-wrap: wrap !important;
    justify-content: center;
    gap: 8px;
  }
`;

export const NavLink = styled(Link)`
font-size: 14px;
text-decoration: underline;
color: #fff;
`;

export const BoxDetalhes2 = styled.div`
  background-color: #1d1f24;
  padding: 20px;

  .caixa-1 {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const WrapperGlobal = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1027px) {
    flex-wrap: wrap !important;
  }
  /* justify-content: space-between; */
`;

export const ContainerMarcasCarros = styled.div`
  /* display: flex;
  align-items: center;
  flex-wrap: wrap; */
  /* background-color: red; */
  gap: 35px;
  flex: 1;
  margin-top: 20px;
  /* max-width: 400px; */

  @media screen and (max-width: 1027px) {
    flex: initial;
    width: 100%;
  }

  .one-1,
  .one-2 {
    display: flex;
    align-items: center;
    gap: 60px;

    @media screen and (max-width: 1027px) {
      justify-content: center;
      gap: 15px;

      p {
        font-size: 14px;
      }
    }
    .um {
      max-width: 100px;
      flex: 1;

      @media screen and (max-width: 1027px) {
        img{
            width: 40px;
        }
      }

      img {
        display: block;
        max-width: 120px;
        margin: 0 auto;
      }

      p {
        color: #fff;
        text-align: center;
      }
    }
  }

  .one-2 {
    margin-top: 20px;
  }
`;

export const ContainerModelos = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  /* background-color: blue; */
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1027px) {
    flex: initial;
    width: 100%;
    justify-content: start;
  }

  div {
    li {
      color: #fff;
      font-size: 15px;
    }

    @media screen and (max-width: 767px) {
      li {
        font-size: 14px;
      }
    }
  }
`;