import axios from "axios";
import { userDataContext } from "../Context/authContext";
import { useState,useEffect, useContext } from "react";
import GlobalStyle from "../assets/css/style-components-reste";
import { ContainerTotal,ContainerReduzidoMobile,TransactionLine,ButtonSection,TransactionsBox,TopStyled,TransactionData,TransactionDescript,TransactionValue } from "../assets/css/styled-Components"
import { useNavigate } from "react-router-dom";

function Transaction({date,value, description,type}){
    let color;
    type ==="entrada"? color ="#03AC00":color = "#C70000"
    return(
        <TransactionLine>
            <TransactionData>
                <p>{date}</p>
            </TransactionData>
            <TransactionDescript>
                <p>{description}</p>
            </TransactionDescript>
            <TransactionValue color={color}>
                <p>R$ {value}</p>
            </TransactionValue>
        </TransactionLine>

    )
} 




export default function TransactionsPage(){
    const [transacoes,SetTransacoes] = useState([])
    const [loading,SetLoading] = useState(true)
    const {userData}=useContext(userDataContext)
    const {name,id,token}=userData
    const navigate= useNavigate();
    let teste;
    
    const config = {
        headers: {
            'id':`${id}`,
            'Authorization': `Bearer ${token}`
        }
    }
    
   

    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/transactions",config)
        promise.then((res)=>{
            const arrayTrans= res.data
            SetTransacoes([...arrayTrans])
            console.log("peguei os dados")
        })
        .catch((error)=> console.log(error))
    },[])


        useEffect(()=>{
            console.log("mudei var")
            SetLoading(false)
        },[transacoes])
   
 

   
  
    return( <>
        <GlobalStyle/>
        <ContainerTotal>
            <ContainerReduzidoMobile>
                <TopStyled>
                    <h3>{`Olá,${name}`}</h3>
                    
                </TopStyled>
                <TransactionsBox>
                {loading?"nada aq":transacoes.map((transacao) => <Transaction date={transacao.date} value={transacao.value} type={transacao.type} description={transacao.description} />)}
                </TransactionsBox>
                <ButtonSection>
                    <button onClick={()=>{navigate(`/transacoes/novatransacao/${"entrada"}`)}}>
                        <p>+</p>
                        <p>Nova entrada</p>
                    </button>
                    <button onClick={()=>{navigate(`/transacoes/novatransacao/${"saida"}`)}}>
                        <p>-</p>
                        <p>Nova Saida</p>
                    </button>
                </ButtonSection>
            </ContainerReduzidoMobile>
        </ContainerTotal>
    </>)

    

}

