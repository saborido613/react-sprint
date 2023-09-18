import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'



import './App.css';
import Login from './componentes/Login'
function App() {

    const [ telaLogin, setTelaLogin ] = useState()
    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    const handleAuth = () => {
        sessionStorage.setItem("username", `${username}`)
        sessionStorage.setItem("password", `${password}`)
        return;
    }

    const usernameLoged = sessionStorage.getItem("username");
    const passwordLoged = sessionStorage.getItem("password");

    useEffect(() => {
        !!usernameLoged && setTelaLogin(usernameLoged === "fiap" && passwordLoged === "1234")
    }, [usernameLoged, passwordLoged, telaLogin])

    if ( telaLogin ) {
        return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
            )
      } else {
        return (
          <LoginArea>
            <h1 style={{ color: "#222"}}>Login</h1>
            <Username type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Password type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' onClick={handleAuth}>
              Entrar
            </Button>
          </LoginArea>
        )
      }
}



export default App;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const Titulo = styled.h1`
  color: #f3f3f3;
  font-size: 4rem;
`

const LoginArea = styled.form`
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 1rem;
`
const Username = styled.input`
  padding: 0.8rem 0.5rem
`
const Password = styled.input`
  padding: 0.8rem 0.5rem
`
const Button = styled.button`
  padding: 0.8rem 0.5rem
`
