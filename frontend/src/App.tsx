import './App.css'
import { Insight } from './components/Insight-page/Insight'
import { Dashboard } from './components/dashboard-page/Dashboard'
import { MainPage } from './components/main-page/MainPage'
import SignInForm from './components/Auth-page/SignInForm'
import SignUpForm from './components/Auth-page/SignUpForm'

import { BrowserRouter, Route, Routes } from "react-router";

function App() {

  return (
      <BrowserRouter>
        <Routes>
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
