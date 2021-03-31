import './index.css'
import Header from './components/header/'
import Footer from './components/footer/'
import Main from './components/main/'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  )
}

export default App
