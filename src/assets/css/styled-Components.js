import styled from "styled-components"
export const ContainerTotal = styled.div`
width: 100vw;
height: 100vh;
background-color:#8C11BE;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Raleway', sans-serif;
`

export const ContainerReduzidoMobile= styled.div`
width:100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const TitleStyled = styled.h1`
color:#FFFFFF;
font-size:32px;
font-weight: 400;
font-family: 'Saira Stencil One', cursive;


`
export const FormStyled = styled.form`
display:flex;
flex-direction:column;
margin:35px 0;
input{
width:326px;
height:58px;
border:none;
margin-bottom:15px;
font-size:20px;
padding-left:10px;
border-radius:5px;
}

input::placeholder{
margin:auto;
font-size:20px;
font-weight:400px;
}

button{

width:326px;
height:46px;
border:none;
color:white;
font-size:20px;
cursor: pointer;
font-weight:700;
padding-left:10px;
border-radius:5px;
background-color:#A328D6;
}
`
export const ParagrafoStyled = styled.p`
color:white;
cursor: pointer;
font-size: 15px;
font-weight:700;

`