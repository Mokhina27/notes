// eslint-disable-next-line no-unused-vars
import React from 'react'
// import intro from '../assets/images/intro.svg'

const Navbar = () => {
  return (
    <>
        <header className="header">
            <nav className="header__nav">
                <div className="container">
                    <div className="header__info">
                        <a href="" className="header__logo">Proweb</a>
                        <ul className="header__list">
                            <li>
                                <a href="" className="header__list-link">Обо мне</a>
                            </li>
                            <li>
                                <a href="" className="header__list-link">Мои работы</a>
                            </li>
                            <li>
                                <a href="" className="header__list-link">Контакты</a>
                            </li>
                        </ul>                        
                    </div>
                </div>
                <div className="intro">
                    <h3 className="intro__title">
                        Добро пожаловать на мой сайт
                    </h3>
                    <h2 className="intro__text">Позвонить</h2>
                </div>  
            </nav>
        </header>
    </>
  )
}

export default Navbar