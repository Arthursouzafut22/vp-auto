import styled from "styled-components";
import keyframes from "styled-components";

const animationMenu = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const ContainerModal = styled.div`
  /* border: 2px solid; */
  max-width: 450px;
  border-radius: 10px;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  position: fixed;
  top: 80px;
  background-color: #ffffff;
  right: 0;
  /* transition: 0.3s all; */
  animation: ${animationMenu} 0.3s forwards;
`;

export const Wrapper1 = styled.div`
  

  .caixa-1 {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
`;

export const Wrapper2 = styled.div`
 

  .caixa-2 {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
   
  }
`;
