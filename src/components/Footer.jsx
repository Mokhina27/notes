// eslint-disable-next-line no-unused-vars
import React from 'react'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import telegram from '../assets/images/telegram.svg'
import email from '../assets/images/email.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <h3 className="footer__title">Связаться со мной</h3>
                <ul className="footer__list">
                    <li>
                        <a href="" className="footer__list-link">
                            <img src={facebook} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list-link">
                            <img src={instagram} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list-link">
                            <img src={telegram} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list-link">
                            <img src={email} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="footer__list-link">
                            <img src={whatsapp} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer