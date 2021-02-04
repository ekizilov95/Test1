import React from "react";
import "./about-company.scss";
import img1 from "./about1.jpg";
import img2 from "./about2.jpg";

const AboutCompany = () => {
  return (
    <div className="about-company">
      <div className="about-company__title titles">
        <h2>Наша компания</h2>
      </div>
      <div className="about-company__column">
        <div
          className="about-company__row"
          style={{ background: "url(" + img1 + ")center / cover no-repeat" }}
        >
          <div className="about-company__inner subtitle">
            <h3 className="about-company__text">Почему мы?</h3>
            <p className="about-company__descr">
              Люди – профессионалы с большим опытом работы. Полный спектр работ
              по металлообработке в одном месте – комплексный индивидуальный
              подход. Конструкторский отдел. Логистика. Многолетний опыт
              машиностроения – создание промышленного{" "}
            </p>
          </div>
        </div>
        <div
          className="about-company__row"
          style={{ background: "url(" + img2 + ")center / cover no-repeat" }}
        >
          <div className="about-company__inner subtitle">
            <h3 className="about-company__text">Наши преимущества</h3>
            <p className="about-company__descr">
              Люди – профессионалы с большим опытом работы. Полный спектр работ
              по металлообработке в одном месте – комплексный индивидуальный
              подход. Конструкторский отдел. Логистика. Многолетний опыт
              машиностроения – создание промышленного{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
