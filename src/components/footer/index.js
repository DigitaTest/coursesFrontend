import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Index = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-Section'></div>
          <div className='footer-Section'>
            <div className='logo-footer'>
              <Link to='/'>
                <h1>DigitaLab</h1>
              </Link>
            </div>
          </div>
          <div className='footer-Section'>
            <div>
              <Link to='contact'>
                <h3>Kontaktirajte nas</h3>
              </Link>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <Link to='team'>
                <h3>O nama</h3>
              </Link>
            </div>
          </div>
          <div className='footer-Section'>
            <div>
              <Link to='/blog'>
                <h3>Blog</h3>
              </Link>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <Link to='/FAQ'>
                <h3>Pitanja i podrška</h3>
              </Link>
            </div>
          </div>
          <div className='footer-Section'>
            <div>
              <Link to='privacy'>
                <h3>Politika privatnosti</h3>
              </Link>
            </div>
          </div>

          <ul className="rightSection">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className='copyright'>
          <p>&copy; DIGITALAB. All rights reserved. 2021 |</p>
        </div>
      </footer>
    </>
  )
}

export default Index
