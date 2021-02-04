import React from 'react'
import './card.scss';

 function Card({src, title, id}) {

    
    return (
        <div key={id} className="services__item">
            <div className="services__subtitle subtitle">
                <h3 className="services__text subtitle__text">{title}</h3>
            </div>
            <img src={src} alt="услуги"/>
        </div>
    )
}

export default Card;