import { ContainerTotal,ContainerFlexStart,FormStyled,ButtonSection,TransactionsBox,TopStyled,TransactionData,TransactionDescript,TransactionValue } from"../assets/css/styled-Components"
import axios from "axios";
import dayjs from "dayjs"
import { userDataContext } from "../Context/authContext";
import { useState,useContext } from "react";
import { useParams,UseNavigate, useNavigate, } from "react-router-dom";
import GlobalStyle from "../assets/css/style-components-reste";
export default function NovaTransacao(){
    let now = dayjs()
    const date = now.format("MM/DD")
    const navigate = useNavigate()
    const {type}=useParams()
    const [value, setValue] = useState("")
    const [description,SetDescription]= useState("")
    const {userData} = useContext(userDataContext)
    const {name,id,token} = userData
    const obj = {
        name,
        id,
        token
    }
    console.log(obj)

    function enviarTransacao(e){
        e.preventDefault();
        const transacao={
            id,
            name,
            type,
            value:parseInt(value),
            description,
            date
        }
        console.log(transacao)
        const config = {
            headers: {
                'id':`${id}`,
                'Authorization': `Bearer ${token}`
            }
        }
        const promise= axios.post("http://localhost:5000/transactions", transacao,config)
        promise.then(()=>{
            console.log("deu certo")
            navigate("/transacoes")})
        .catch((error)=> console.log(error))
    }
    return(
    <>
        <GlobalStyle/>
            <ContainerTotal>
                <ContainerFlexStart>
                <TopStyled>
                    <h3>Nova Transação</h3>
                    
                </TopStyled>


                <FormStyled onSubmit={(e)=>enviarTransacao(e)} >
            
                <input 
                placeholder="Valor"
                onChange={(e)=> setValue(e.target.value)}
                type="number"
                value={value}
                ></input>

                <input 
                placeholder="Descriação"
                onChange={(e)=> SetDescription(e.target.value)}
                value={description}
                ></input>

                <button type="submit">Nova {type}</button>
            </FormStyled>
                </ContainerFlexStart>
        </ContainerTotal>
    </>
    )
}
