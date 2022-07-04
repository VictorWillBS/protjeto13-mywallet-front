import axios from "axios";
import { userDataContext } from "../Context/authContext";
import { useState,useEffect, useContext } from "react";
import GlobalStyle from "../assets/css/style-components-reste";
import { ContainerTotal,ContainerReduzidoMobile,TransactionLine,ButtonSection,TransactionsBox,TopStyled,TransactionData,TransactionDescript,TransactionValue } from "../assets/css/styled-Components"

function Transaction(){
    return(
        <TransactionLine>
            <TransactionData>
                <p>02/04p</p>
            </TransactionData>
            <TransactionDescript>
                <p>pix</p>
            </TransactionDescript>
            <TransactionValue>
                <p>R$ 3000,00</p>
            </TransactionValue>
        </TransactionLine>

    )
} 




export default function TransactionsPage(){
    const [transacoes,SetTransacoes] = useState(undefined)
    const {userData}=useContext(userDataContext)
    const {name,id,token}=userData
    
    
    const config = {
        headers: {
            'id':`${id}`,
            'Authorization': `Bearer ${token}`
        }
    }
    console.log(config)
    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/transactions",config)
        promise.then((res)=>{
            const arrayTrans= res.data
            SetTransacoes({...arrayTrans})
        })
        .catch((error)=> console.log(error))
    },[])

    return(
    <>
        <GlobalStyle/>
        <ContainerTotal>
        <ContainerReduzidoMobile>
        <TopStyled>
            <h3>{`Olá,${name}`}</h3>
            <div>elemento 2</div>
        </TopStyled>
        <TransactionsBox>
            <Transaction></Transaction>
        </TransactionsBox>
        <ButtonSection>
            <button></button>
            <button></button>
        </ButtonSection>
        </ContainerReduzidoMobile>
             
        </ContainerTotal>
    
    </>)
    

}

