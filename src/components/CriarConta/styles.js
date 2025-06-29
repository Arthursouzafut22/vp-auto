import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.58);
  position: fixed;
  width: 100%;
  z-index: 2000;
  top: 0;
  overflow-y: auto;

  .wrapper-geral {
    display: flex;
    align-items: center;
    max-width: 100%;
    /* background-color: palegoldenrod; */
    max-width: 900px;
    padding: 0px 20px 80px 20px;
    position: relative;
    /* margin-top: 220px; */

    @media (max-width: 864px) {
      flex-direction: column;
      max-width: 100% !important;
    }
  }
`;


export const Form = styled.form`
  /* width: 100%; */
  background-color: #ffffff;
  flex: 2;

  @media (max-width: 864px) {
    width: 100%;
  }

  fieldset {
    padding: 20px 30px;
    border: none;

    h1 {
      margin-bottom: 30px;
    }

    input[type="password"],
    input[type="email"] {
      display: block;
      width: 100%;
      border: 1px solid #dbdbdb;
      height: 40px;
      padding: 5px 45px 5px 15px;
    }

    .container-check {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 5px;
      margin: 10px 0px;

      span {
        display: block;
        font-size: 14px;
        color: #383b3e;
      }
    }

    button {
      background-color: #0099dd;
      font-size: 17px;
      border: none;
      color: #fff;
      width: 100%;
      padding: 13px;
      cursor: pointer;
      margin-top: 6px;
    }
  }
`;

export const BoxDetalhesForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 8px; */

  @media (max-width: 864px) {
   

    .filho {
        max-width: 100%;
        
      img {
        width: 20px;
      }

      span {
        font-size: 10px !important;
      }
    }

    .red {
      span {
        font-size: 10px !important;
        display: block;
      }
    }
  }

  .filho {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px 20px;
  }

  .blue {
    img {
      filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
    }
  }

  .red {
    background-color: #f64d4d;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const Box2 = styled.div`
  background-color: #f6f7f8;
  padding: 20px 30px;
  /* width: 100%; */
  /* height: 100% !important; */
  flex: 1;

  h1 {
    /* margin-bottom: 30px; */
  }

  p {
    font-size: 14px;
    color: #383b3e;
  }

  span {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    padding: 5px 0px;
  }

  button {
    background-color: #ffffff;
    border-color: #0099dd;
    color: #0099dd;
    width: 100%;
    cursor: pointer;
    padding: 13px;
    font-size: 17px;
  }
`;