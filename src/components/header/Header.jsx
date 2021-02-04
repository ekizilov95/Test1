import React, {useState, useEffect, useRef} from "react";
import logo from "./img/logo.png";
import LanguageSelectBtn  from "../languageSelectBtn";
import search from "./img/search.svg";
import RU from "./img/flag1.svg";
import UA from "./img/flag2.svg";
import UK from "./img/flag3.svg";
import arrow from './img/arrow.svg';
import './header.scss';

const Header = ({items}) => {
const [state, setstate] = useState(0);
const [searchOn, setSearchOn] = useState(false);
const [toggleBurger, setToggleBurger] = useState(false)

const popap = useRef();

useEffect(() => {
  document.body.addEventListener('click', (e) => {
    if(!e.path.includes(popap.current)) {
      setSearchOn(false);
    }
  });

}, [])

const onToggleBurger = () => {

  setToggleBurger(!toggleBurger);
 

  if(!toggleBurger) {
    document.body.style.overflow="hidden";
  } else {
    document.body.style.overflow="";
  }

  
  
}



return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div href="#" className="header__logo logo">
            <img src={logo} alt="logo" />
          </div>
          <div onClick={onToggleBurger} className={`header__burger ${toggleBurger? "header__burger_active": null}`}>
            <span></span>
          </div>
          <nav className={`header__menu menu ${toggleBurger? "menu_active": null}`}>
            <div className="menu__region-mob">
              <div className="menu__flag-icon menu__flag-icon_active"><img src={RU} alt="ru"/></div>
              <div className="menu__flag-icon"><img src={UK} alt="uk"/></div>
              <div className="menu__flag-icon"><img src={UA} alt="ua"/></div>
            </div>
            <ul className="menu__list">
              {
                items?.map((name, i) => (
                  <li onClick={() => setstate(i)} key={`${name}_${i}`} className={`menu__item ${state === i ? "menu__item_active": ""}`}>
                  {name} {name === "Услуги" ? <img className="menu__item-icon" src={arrow} alt="arrow"/> : null }
                  </li>
                  
                ))
              }
            </ul>
          </nav>
          <div className="header__actions actions">
          <div ref={popap} className={`actions__item actions__search-btn ${searchOn ? "actions__search-btn_active" : null}`}>
            <img onClick={() => setSearchOn(true)} className="actions__search-icon" src={search} alt="search" />
                {
                  searchOn ? 
                  <div className="search-popap"> 
                   <input className="search-popap__input" type="search " placeholder="Поиск"/> 
                   <img className="search-popap__icon" onClick={() => setSearchOn(false)} src={search} alt="search" />
                  </div> 
                  : null
                }
          </div>
            <LanguageSelectBtn items={[RU, UK, UA]}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
