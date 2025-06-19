import styled from "styled-components";
import BannerHeader from "../../assets/image/bannerHeader.jpg";

export const Section = styled.section`

`;

export const ContainerBanner = styled.div`
  width: 100%;
  /* height: 35vh; */
  background: url(${BannerHeader}) center center no-repeat;
  background-size: cover;

  h1 {
    padding: 135px 5px 0;
    color: #fff;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.4);
    height: 35vh;
    font-size: 38px;
    line-height: 38px;
  }

  @media (max-width: 768px) {
    /* height: 30vh;  */

    h1 {
      height: 30vh;
      padding: 90px 5px 0;
    }
  }
`;

export const ContainerFormulario = styled.div`
  max-width: 1100px;
  margin: 20px auto auto auto;
  padding: 20px;

  h2 {
    color: #383b3e;
    font-size: 25px;
    font-weight: 600;
  }

  p {
    color: #383b3e;
    font-size: 15px;
  }
`;

export const Formulario = styled.form`
  /* max-width: 600px; */

  fieldset {
    border: none;
    margin-bottom: 12px;

    label {
      display: block;
      color: #383b3e;
      font-size: 15px;
    }

    input:focus {
      outline: 1px solid #4a9cdd;
      border: 1px solid transparent;
    }

    input,
    select {
      width: 100%;
      border: 1px solid #dbdbdb;
      border-radius: 0;
      height: 40px;
      padding: 5px 10px;
    }
  }
`;


export const WrapperInputs = styled.div`
  max-width: 600px;
`;


export const ContainerTexto = styled.div`
margin-top: 20px;

p{
  margin-bottom: 14px;
}

`;

export const ButtonValidar = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  min-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-weight: normal;
  background-color: #0099dd;
  margin: 10px 0 4px;
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  font-size: 16px;
`;

export const CardSuporte = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
  border-top: 2px solid #dbdbdb;
  margin-top: 60px;

  @media (max-width:467px){
    flex-wrap: wrap;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    text-align: center;
    padding-top: 18px;
    color: #0099dd;
    font-size: 22px;
  }
`;