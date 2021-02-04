import React from 'react';
import icon1 from './img/facebooksvg.svg';
import icon2 from './img/instagram-1.svg';
import icon3 from './img/subtract.svg';
import icon4 from './img/youtube.svg';
import footerLogo from './img/footer-logo.svg';
import './footer.scss';

export default function Footer({servicesItems, aboutCompanyItems}) {
    return (
        <footer className="footer">
           <div className="container">
                <div className="footer__row">
                    <div className="footer__column">
                        <div className="footer__title">
                            <h4>О компании</h4>
                        </div>
                        <ul className="footer__list">
                            {aboutCompanyItems.map((name, i) => (
                                <li key={i} className="footer__list-item">{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div className="footer__title">
                                <h4>Услуги</h4>
                        </div>
                        <ul className="footer__list">
                            {servicesItems.map((name, i)=> (
                                <li key={i} className="footer__list-item">{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div className="footer__title">
                            <h4>Контактная информация</h4>
                        </div>
                        <div className="footer__contacts contacts">
                            <div className="contacts__address">
                                <span className="contacts__item" itemProp="streetAddress">Заводская улица, 2В</span>,
                                <span className="contacts__item" itemProp="addressLocality">Буча</span>,<br/>
                                <span className="contacts__item" itemProp="addressRegion">Киевская область</span>
                                <span className="contacts__item" itemProp="postalCode">08292</span>
                            </div>
                            <div className="contacts__opening-hours contacts__item">ПН - ПТ: <span>09:00 - 18:00</span></div>
                            <div className="contacts__tel"><a href="tel:+38(097)123-45-67" className="contacts__item" itemProp="telephone">+38(097)123-45-67</a></div>
                            <div className="contacts__social social">
                                <div className="social__icon">
                                    <a className="social__link" href="#"><img className="social__img" src={icon1} alt="facebook"/></a>
                                    <a className="social__link" href="#"><img className="social__img" src={icon2} alt="instagram"/></a>
                                    <a className="social__link" href="#"><img className="social__img" src={icon3} alt="subtract"/></a>
                                    <a className="social__link" href="#"><img className="social__img" src={icon4} alt="youtube"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__logo">
                    <img src={footerLogo} alt="footerLogo"/>
                </div>
           </div>
        </footer>
    )
}
