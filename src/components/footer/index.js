import './footer.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-Section'>
            <div>
              <Link to='/'>DigitaLab</Link>
            </div>
          </div>
          <div className='footer-Section'></div>
          <div className='footer-Section'></div>
        </div>
        <div className='copyright'>
          <p>&copy; DIGITALAB. All rights reserved. 2021 |</p>
        </div>
      </footer>
    </>
  )
}

export default Index
