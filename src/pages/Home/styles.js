import styled from "styled-components";
import Banner from "../../assets/image/videoframe_18165.png";
import BannerMobile from "../../assets/image/mobile.webp";

export const Home = styled.main`
  /* background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center; */
  /* padding: 15px 20px; */
  /* background-color: #f7f8fa; */

  /* @media screen and (max-width: 767px) {
    background-image: url(${BannerMobile});
    height: 480px;
    align-items: start;
  } */
`;

export const ContainerGlobal = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;

  @media screen and (max-width: 767px) {
    background-image: url(${BannerMobile});
    height: 480px;
    align-items: start;
    margin-top: 20px;
  }

  /* @media screen and (max-width: 767px) {
  } */

  h1 {
    color: #004d71;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  p {
    color: #6bb4a7;
    font-size: 25px;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;

export const WrapperFormulario = styled.div`
  border: 1px solid #004d71;
  padding: 30px 20px;
  max-width: 1020px;
  /* max-width: 100%; */
  background-color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  border-radius: 50px;
  margin-top: 30px;

  span {
    display: block;
    color: #004d71;
    text-align: left;
    margin-bottom: 6px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    input,
    select {
      font-size: 16px;
      background-color: #f7f8fc;
      border: 1px solid #004d71;
      padding: 6px;
      border-radius: 50px;
      flex: 1;

      & {
        outline: none;
      }
    }

    button {
      display: flex;
      font-size: 16px;
      font-weight: bold;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 50px;
      border: none;
      background-color: #004d71;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const WrraperInputs = styled.div`
width: 100%;
  .caixa-1 {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    width: 100%;
    flex: 1;
  }

  input,
  select {
    font-size: 16px;
    background-color: #f7f8fc;
    border: 1px solid #004d71;
    padding: 6px;
    border-radius: 50px;
    width: 100%;

    & {
      outline: none;
    }
  }
`;


