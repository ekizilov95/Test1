import React, { useState } from "react";
import "./regionSelect.scss";
import arrow from "../header/img/arrow.svg";

const LanguageSelectBtn = ({ items }) => {
  const [isActive, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (i) => {
    setActiveItem(i);
    setActive(false);
  };

  const setVisibleMenu = () => {
    setActive(!isActive);
  };

  const menu = React.useRef();

  const outsideClick = (e) => {
    if (!e.path.includes(menu.current)) {
      setActive(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", outsideClick);
  }, []);

  return (
    <div ref={menu} className="actions__item select-region">
      {
        <img
          onClick={setVisibleMenu}
          className="select-region__flag"
          src={items[activeItem]}
          alt="flag"
        />
      }
      <img
        className={`select-region__arrow ${
          isActive ? "select-region__arrow_active" : ""
        }`}
        src={arrow}
        alt="arrow"
      />
      {isActive && (
        <ul className="select-region__menu">
          {items.map((item, i) => {
            if (activeItem === i) {
              return null;
            }
            return (
              <li
                onClick={() => onSelectItem(i)}
                key={`${item + i}`}
                className="select-region__item"
              >
                <img src={item} alt="flagUA" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelectBtn;
