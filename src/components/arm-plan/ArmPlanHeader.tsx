import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import imgCard from '../../assets/images/person-card.svg';
import imgBack from '../../assets/icons/icon_back.svg';


export const ArmPlanHeader = () => {
	const navigate = useNavigate();

	const { license, brandCar, modelCar, yearCar } = useSelector((state: any) => state.vehicle);

	const { name } = useSelector((state: any) => state.user);

	const goToBack = () => {
		navigate(-1);
	}
	
	return (
		<div className="arm-plan-header">
			<button className="arm-plan-header__button-back is-desktop" onClick={ goToBack }>
				<img src={ imgBack } alt="Volver" />
				<span className="arm-plan-header__button-back-text">VOLVER</span>
			</button>
			<h2 className="arm-plan-header__title_desktop is-desktop">¡Hola, 
				<span className="arm-plan-header__title_desktop arm-plan-header__title_desktop--red"> { name }!</span>
			</h2>
			<h2 className="arm-plan-header__title is-mobile">Mira las coberturas</h2>
			<p className="arm-plan-header__subtitle">Conoce las coberturas para tu plan</p>
			<div className="arm-plan-header__card">
				<div className="arm-plan-header__content">
					<p className="arm-plan-header__text--small">Placa: { license }</p>
					<p className="arm-plan-header__text mb-16">{ brandCar } { yearCar }<br />{ modelCar }</p>
				</div>
				<div className="arm-plan-header__card-image">
					<img 
						src={imgCard} 
						alt="hombre en la tarjeta"
						className="arm-plan-header__image"
						height="156"
					/>
				</div>
			</div>
		</div>
	)
}