import React from 'react';
import './Footer.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          El amigo que necesitas para ese momento especial.
        </p>
        <p className='footer-subscription-text'>
          Suscribite y comienza, Ya no estes solo.
        </p>
        {/*<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu correo'
            />
            <Button buttonStyle='btn--outline'>Suscribirse</Button>
          </form>
  </div>*/}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/ConoceMas'>Como funciona</Link>
            <Link to='/'>Amigos Alquilados</Link>
            <Link to='/'>FAQ'</Link>
            <Link to='/'>Terminos y condiciones</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/Soporte'>Soporte</Link>
            <Link to='/'>Direcciones</Link>
            <Link to='/'>Patrocinadores</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Amigos</h2>
            <Link to='/SeAmigo'>Se un amigo</Link>
            <Link to='/ConocerMas'>Busca Amigo</Link>
            <Link to='/'>Ubicacion</Link>
            <Link to='/'>Influencers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              NEARBY 
              FRIEND
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Booleans Soft © 2024</small>
          <div className="redes-sociales">
                <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                <FacebookOutlined style={{ fontSize: '24px' }} />
            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;