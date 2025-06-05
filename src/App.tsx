import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
