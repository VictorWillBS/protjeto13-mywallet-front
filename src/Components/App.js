import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import {useState } from "react"
import {tokenContext}from "./../Context/authContext.js"
export default function App(){
    const [token, setToken] = useState(undefined)
    return(
    <>
        <tokenContext.Provider value = {{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<LoginPage/>}/>
                    <Route path="/cadastro" element= {<SignUpPage/>}/>
                </Routes>
            </BrowserRouter>
        </tokenContext.Provider>
    </>
    )
}
