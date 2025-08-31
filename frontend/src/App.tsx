import './App.css'
import { Insight } from './components/Insight-page/Insight'
import { Dashboard } from './components/dashboard-page/Dashboard'
import { MainPage } from './components/main-page/MainPage'
import SignInForm from './components/Auth-page/SignInForm'
import SignUpForm from './components/Auth-page/SignUpForm'
import { BrowserRouter, Route, Routes } from "react-router";

import { userId } from './store/URLs'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import axios from 'axios'
import Homepage from './components/landing-page/Homepage'

function App() {
  const [, setUser] = useAtom(userId)

  async function fetchUser(){
    const {data}  = await axios('http://localhost:5000/me',{
      headers: {
        'token': localStorage.getItem('token')
      }
    })

    setUser(data.userId);
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/" element={<MainPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/insights/:analysisid/:userid" element={<Insight />}/>
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
        )
}

export default App
