import styled from "styled-components";

export const ContainerGarantia = styled.div`
margin-top: 50px;

h1{
    margin-bottom: 15px;
}

`;

export const BoxGarantia = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px 20px;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
`;

export const CardGarantia = styled.div`
  max-width: 320px;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    /* width: 100%; */
    max-width: 100%;
    width: 175px;
    height: auto;
    min-height: 100%;
    cursor: pointer;
    border-radius: 175px;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
  }

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;