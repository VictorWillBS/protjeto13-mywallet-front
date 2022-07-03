import {useContext,useEffect,useState} from "react"
import { Link } from "react-router-dom"

import GlobalStyle from "../assets/css/style-components-reste"
import { ContainerTotal,ContainerReduzidoMobile,TitleStyled,FormStyled,ParagrafoStyled } from "../assets/css/styled-Components"
import axios from "axios"

export default function LoginPage(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    function enviarlogin(e){
        e.preventDefault();
        const login ={
            email,
            password
        }
        const promise = axios.post("localhost:5000/sign-in",login)
        promise.then(()=>{console.log("SUCESSO")}).catch((error)=>{console.log(error)})

    }

    return(
    <>
    <GlobalStyle/>
    <ContainerTotal>
        <ContainerReduzidoMobile>
            <TitleStyled>NuBank</TitleStyled>
            <FormStyled onSubmit={(e)=>enviarlogin(e)}>
                <input 
                placeholder="E-mail"
                onChange={(e)=>setEmail(e.target.value)}
                value = {email}
                ></input>
                <input
                placeholder="Senha"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value = {password}
                ></input>
                <button>Entrar</button>
            </FormStyled>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <ParagrafoStyled> Primeira vez? Cadastre-se!</ParagrafoStyled>
            </Link>
            
        </ContainerReduzidoMobile>
        
    </ContainerTotal>
    </>
    )
}