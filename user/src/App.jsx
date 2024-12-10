
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import home from './components/home'

function App() {
  

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/home' Component={home}/>

        
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
