import React, { useState } from 'react'
import AboutCompany from '../aboutCompany'
import AboutServices from '../aboutServices/AboutServices'
import Header from '../header'
import MainSlider from '../mainSlider'
import Footer from '../footer'
import './app.scss'

const App = () => {
	const [services, setservices] = useState([])

	React.useEffect(() => {
		fetch('http://localhost:3000/db.json')
			.then((res) => res.json())
			.then((json) => setservices(json.services))
	}, [])

	return (
		<div className="app">
			<Header
				items={[
					'Главная',
					'Услуги',
					'Наши работы',
					' О нас',
					'Контакты',
				]}
			/>
			<MainSlider />
			<AboutServices items={services} />
			<AboutCompany />
			<Footer
				servicesItems={[
					'Производство оборудования',
					'Металлическая мебел',
					'Металлоконструкции',
					'Металлообработка',
					'Раскрой металла',
					'Конструкторское бюро',
					'Аренда техники',
					'Ремонт техники,',
				]}
				aboutCompanyItems={[
					'Наши работы',
					'Контакты',
					'Доставка',
					'Форма заказа',
				]}
			/>
		</div>
	)
}

export default App
