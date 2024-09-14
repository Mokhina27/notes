// eslint-disable-next-line no-unused-vars
import React from 'react'
import aboutImg from '../assets/images/about.png'
import cardImg from '../assets/images/works.svg'

const Main = () => {

  return (
    <>
        <main className="main">
            <div className="about">
                <div className="container">
                    {/* <div className="about__info"> */}
                        <h2 className="about__title">Обо мне</h2>
                        <div className="about__content">
                            <img src={aboutImg} alt="" />
                            <div className="about__info">
                                <h3 className="about__info-title">Зубенко Михаил Петрович</h3>
                                <p className="about__info-text">
                                Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. 
                                </p>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
            <div className="works">
                <div className="container">
                    <h2 className="works__title">Мои работы</h2>
                    <div className="works__grid">
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                        <div className="works__card">
                            <img src={cardImg} alt="" className="works__card-img" />
                            <h3 className="works__card-title">Чиланзар</h3>
                            <p className="works__card-text">
                            Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году 
                            </p>
                            <button className="works__card-btn">Посмотреть</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Main