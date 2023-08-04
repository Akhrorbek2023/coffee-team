import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './containers/About'
import { Home } from './containers/Home'
import { Plan } from './containers/Plan'

function App() {
  

  return (
    <>
      

      <Router>
      <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/plan' element={<Plan/>}/>
        </Routes>
        <Footer/>
      </Router>


    </>
  )
}

export default App
