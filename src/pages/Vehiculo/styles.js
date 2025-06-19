import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionVehiculo = styled.section`
  background-color: #f6f7f8;
`;

export const BoxAzul = styled.div`
  background-color: #00a4d4;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-1 {
    h1 {
      color: #fff;
      margin: 0px;
      line-height: 28px;
    }

    span {
      color: #fff;
      display: block;
     
    }
  }

  .item-2 {
    p {
      color: #fff;
      font-size: 14px;
    }
  }

  .item-3 {
    button {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 15px;
      background-color: #0099dd;
      color: #fff;
      border: 1px solid #fff;
      padding: 8px;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;

    .item-1 {
        margin-bottom: 5px;
        span{
            font-size: 14px;
        }
    }

    .item-3 {
      button {
        display: none;
      }
    }
  }
`;

export const WrapperGlobal = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 12px;
  /* align-items: center; */

  @media (max-width: 767px) {
    .h1 {
      line-height: 26px;
      font-weight: 600;
      
    }
  }
`;

export const BoxInformacoesCarros = styled.div`
  @media (max-width: 767px) {
    .caixa-flex {
      flex-direction: column;
      gap: 0px !important;
      margin-top: 10px;
      align-items: start !important;

      p {
       
        font-size: 14px !important;
        margin: 0px;
        padding: 0px;
      
      }
    }
  }

  .caixa-flex {
    display: flex;
    align-items: center;
    gap: 30px;

    p {
      font-size: 20px;
    }
  }
`;

export const ContainerDetalhesCarros = styled.div`


`;

export const Box = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 972px){
    flex-wrap: wrap;
  }
`;

export const BoxGaleriaImagemCarros = styled.div`
  max-width: 600px;
  position: relative;

  .img-1{
    height: 100%;
  }

  @media screen and (max-width: 972px) {
    max-width: 100%;
  }
`;

export const ControllesImagesButton = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.31);
  width: 100%;
  z-index: 22;

  .caixa-img {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    img{
      cursor: pointer;
    }
   

    @media (max-width: 467px) {
      img {
       width: 45px;
      }

    }
    

  }
`;

export const BoxValoresInformacao = styled.div`
  border: 1px solid #b7bbbd;
  /* max-width: 650px !important; */
  width: 100%;

  @media screen and (max-width: 972px) {
    max-width: 100%;
  }
`;

export const ContainerInfo = styled.div`
  padding: 15px 30px;
  background-color: #ffffff;

  .caixa-cronometro {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    .box-cronometro {
      display: flex;
      align-items: center;
      gap: 15px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;

        p {
          font-size: 25px !important;
          margin: 0;
          font-weight: bold;
        }
        b {
          margin: 0;
          font-size: 12px;
          display: block;
          font-weight: normal;
        }
      }
    }
  }
`;

export const ContainerValorCarroEbutton = styled.div`
  background-color: #f4f4f4;
  margin-top: 20px;
  /* padding: 15px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .caixa-preco-novo {
    margin-top: 50px;
    background-color: #d3d3d3;
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;

    span {
      color: #4c4e51;
    }
  }
`;

export const BoxWrraper = styled.div`
  padding: 15px;

  .wrapper {
    h4 {
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 35px;
      color: #0d65ac;
      font-weight: 600;
    }
    .pai {
      form {
        display: flex;
        align-items: center;

        input {
          padding: 15px 5px;
          font-size: 15px;
          outline: none;
          border: 0.5px solid #b7bbbd;
          width: 100%;
        }

        button {
          font-size: 30px;
          padding: 4.5px;
          font-weight: bold;
          font-weight: 500;
          background-color: #ffffff;
          border: 0.5px solid #b7bbbd;
        }
      }

      .btn-validar {
        width: 100%;
        background-color: #f15331;
        font-size: 16px;
        padding: 15px 5px;
        color: #fff;
        margin-top: 12px;
        cursor: pointer;
        border: none;
      }
    }
  }
`;

export const BoxContato = styled.div`
  background-color: #ffffff;
  padding: 8px 20px;
 flex: 1;
`;

export const CaixaRedeSociais = styled.div`
display: flex;
align-items: center;
gap: 8px;

`;

export const ContainerLinks = styled.div`
margin-top: 30px;

div{
    display: flex;
    align-items: center;
    gap:8px;
    padding-block: 14px;
    
}

`;

export const NavLink = styled(Link)`
  color: #354047;
  text-decoration: underline;

  &:hover {
    color: #00a4d4;
  }
`;

export const ContainerTelPhone = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 0.5px solid #004f6e;
  border-bottom: 0.5px solid #004f6e;
  padding-block: 5px;
  margin-top: 8px;

  p {
    font-size: 20px;
    color: #004f6e;
    line-height: 26px;
  }
`;

export const ContainerSuporte = styled.div`
  margin-top: 10px;

  .card-suporte {
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px auto auto;
    padding: 16px;
    background-color: #f5f7fb;
    border-radius: 12px;

    strong {
      display: block;
      text-align: center;
    }

    button {
      background-color: #e8603a;
      border: none;
      font-size: 17px;
      margin-top: 8px;
      color: #ffff;
      padding: 12px 22px;
      border-radius: 24px;
      cursor: pointer;
    }
  }
`;


export const ContainerSegundaParte = styled.div`
  background-color: #ffffff;
  padding: 8px 20px;
  margin-top: 20px;
`;

export const Filho1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: 1007px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;

  }

  .div {
    display: flex;
    align-items: center;
  }

  .outra-div {
    border: 1px solid #b7bbbd;
    padding: 10px;
    p {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const ContainerInformacoesGerais = styled.div`
 margin-top: 40px;
`;

export const BoxFlexInfo = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media (max-width:930px){
   flex-direction: column;
   align-items: start;
   gap: 6px;
 }
`

export const Info1 = styled.div``;
export const Info2 = styled.div``;
export const Info3 = styled.div``;

export const BoxObservacoes = styled.div`
margin-top: 45px;
`;

export const BoxEquipamentos = styled.div`
  margin-top: 45px;
`;

export const BoxEstadoDoVeiculo = styled.div`
  margin-top: 35px;
  .dt {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-block: 10px;
  }
`;

export const BoxTecnicasDoCarro = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  margin-top: 35px;

  @media (max-width:930px){
    flex-wrap: wrap;
  }

  .caixa-tecnica {
    display: flex;
    align-items: center;
    gap: 7px;

    div {
      display: block;
      width: 15px;
      height: 15px;
    }
  }
`;

export const BoxCaracteristicasTecnicas = styled.div`
margin-top: 45px;

h1{
    margin-top: 6px;
}

`;

export const WrapperCaracteristicas = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width:767px){
  flex-wrap: wrap;
}

`;

export const Caracteristicas1 = styled.div``
