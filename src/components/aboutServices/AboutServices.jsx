import React from 'react';
import './about-services.scss';
import Card from '../servicesCard';
import gear from './images/gear.png';


const AboutServises = ({items}) => {

    const [rotate, setRotate] = React.useState(0);

    React.useEffect(() => {

        window.addEventListener('scroll', () => {
            let res = window.pageYOffset;
            setRotate(res);
        });
        
    }, []);    
    

    return (
        <div className="services">
            <div className="services__gears gears">
                <img style={{transform:`rotate(${rotate}deg)`}} src={gear} alt="gear" className="gears__item"/>
                <img style={{transform:`rotate(-${rotate}deg)`}} src={gear} alt="gear" className="gears__item"/>
                <img style={{transform:`rotate(${rotate}deg)`}} src={gear} alt="gear" className="gears__item"/>
                <img style={{transform:`rotate(-${rotate}deg)`}} src={gear} alt="gear" className="gears__item"/>
            </div>
           <div className="container">
                <div className="services__title titles">
                    <h2>Услуги</h2>
                </div>
                <div className="services__cards">
                    {
                        items.map((item) => (
                            <Card key={item.id}  src={item.src} title={item.title}/>
                        ))
                    }
                </div>
                <div className="services__button">
                    <button className="services__btn subtitle__text">Быстрый расчет цены по чертежу</button>
                </div>
            </div>
        </div>
    );
};

export default AboutServises;