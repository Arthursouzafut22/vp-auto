import styled from "styled-components";

export const ContainerCarrosel = styled.div`
  background-color: #f7f8fa;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const WrapperCarrosel = styled.div`
  /* padding: 20px; */
  background-color: #ffffff;
  max-width: 100%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  /* position: relative;
  display: flex;
  align-items: center; */
  position: relative;

  @media screen and (max-width: 767px) {
    
    h1{
        font-size: 18px;
        text-align: center;
        margin-bottom: 8px;
    }
  }

  .swiper-button-prev-custom {
    position: absolute;
    left: 40px;
    top: 50%;
    bottom: 50%;
    background-color: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    cursor: pointer;
    border: 2px solid #707070;

    &:hover {
      box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
      background-color: #ffffff;
      border: none;
    }

    @media screen and (max-width: 1070px) {
      display: none;
    }
  }

  .swiper-button-next-custom {
    right: 40px;
    position: absolute;
    top: 50%;
    bottom: 50%;
    background-color: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    cursor: pointer;
    border: none;
    border: 2px solid #707070;

    &:hover {
      box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
      background-color: #ffffff;
      border: none;
    }
    @media screen and (max-width: 1070px) {
      display: none;
    }
  }
`;

export const BoxCarrosel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const Card = styled.div`
  max-width: 298px;
  border: 2px solid #ff4c00;
  padding: 8px;
  margin: 0 auto;
  min-height: 350px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  p {
    text-align: center;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    height: 170px;
  }

  span {
    font-size: 14px;
    background-color: #ff4c00;
    color: #fff;
    padding: 5px 10px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 17px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 767px) {
    min-height: 340px;

    p {
      font-size: 13px !important;
    }
  }
`;
