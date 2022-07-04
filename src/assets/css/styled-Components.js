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
max-width:450px;
height: 100%;
padding: 25px 25px 16px 25px;;    
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`
export const ContainerFlexStart= styled.div`
width:100%;
max-width:450px;
height: 100%;
padding: 25px 25px 16px 25px;;    
display:flex;
flex-direction:column;
justify-content:flex-start;
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
export const TopStyled = styled.section`
    width:100%;
    height: max-content;
    display:flex;
    justify-content: space-between;
    align-items: center;
   

    & >h3{
        color: white;
        font-size: 26px;
        font-weight:700;
    }
`
export const TransactionsBox = styled.section `
    width:100%;
    height:426px;
    background-color:white;
    border-radius:5px;
    padding: 15px;

`

export const ButtonSection = styled.section `
    width:100%;
    display: flex;
    justify-content:space-around;
    align-items:center;

    button{
        cursor: pointer;
        width:155px;
        height:114px;
        background-color:#A328D6;
        border:none;
        border-radius:5px;
    }

`

export const TransactionLine = styled.span` 
    display: flex;
    justify-content:space-between;
    align-items:center;
`
export const TransactionData = styled.article`
    color:grey;
`
export const TransactionDescript = styled.article`
    color:black;
`
export const TransactionValue = styled.article`
    color: ${props=>props.color};
`