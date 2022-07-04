import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import TransactionsPage from "./TransactionsPage"
import NovaTransacao from "./NovaTransacao"
import {useState } from "react"
import {userDataContext}from "./../Context/authContext.js"
export default function App(){
    const [userData, setUserData] = useState({})
    return(
    <>
        <userDataContext.Provider value = {{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<LoginPage/>}/>
                    <Route path="/cadastro" element= {<SignUpPage/>}/>
                    <Route path="/transacoes" element= {<TransactionsPage/>}/>
                    <Route path="/transacoes/novatransacao/:type" element= {<NovaTransacao/>}/>
                </Routes>
            </BrowserRouter>
        </userDataContext.Provider>
    </>
    )
}
