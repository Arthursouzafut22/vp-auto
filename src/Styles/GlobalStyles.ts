import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body *{
    font-family: "Poppins", serif;
 }

 body{
   /* background-color: #FFFFFF; */
 }

 a{
    display: block;
    text-decoration: none;
 }

 ul>li{
    list-style: none;
    padding: 0;
 }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
