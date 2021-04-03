import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

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
          <div className='footer-Section'>
            <div className='social-icons'>
              <FaFacebook />
            </div>
            <div className='social-icons'>
              <FaInstagram />
            </div>
            <div className='social-icons'>
              <FaTwitter />
            </div>
            <div className='social-icons'>
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; DIGITALAB. All rights reserved. 2021 |</p>
        </div>
      </footer>
    </>
  )
}

export default Index
