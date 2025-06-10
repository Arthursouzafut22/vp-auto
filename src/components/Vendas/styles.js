import styled from "styled-components";

export const ContainerVendas = styled.div`
  margin-top: 60px;

  .caixa {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4.6%;
    row-gap: 40px;
  }

  button {
    background-color: #ff4c00;
    display: block;
    color: #fff;
    border: none;
    margin: 50px auto auto;
    font-size: 17px;
    padding: 7px 28px;
    border-radius: 4px;
    cursor: pointer;
    
  }
`;

export const CardVendas = styled.div`
  max-width: 350px;
  border: 2px solid #737373;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  min-height: 300px;
  height: 100%;
  /* flex: 1 0 350px; */

  b {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    background-color: #6f6f6f;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 7px;
    top: 0;
    right: 0;
    color: #fff;
    position: absolute;
    z-index: 22;
    font-size: 15px;
    font-weight: normal;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    border-radius: 10px;
    /* width: 100%; */
  }
`;

export const BoxCard = styled.div`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;

  span {
    display: block;
  }

  .caixa-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BoxDetalhes = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  max-width: 100%;
 

  h2 {
    color: #ff4c00;
    line-height: 30px;
  }

  /* p{
    color: #fff;
    font-weight: 600;
    font-size: 22px;
    margin: 0;
  } */
`;
