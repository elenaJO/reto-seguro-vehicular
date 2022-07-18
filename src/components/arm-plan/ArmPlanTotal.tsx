import { BtnApp } from "../shared/buttons/BtnApp"
import { useNavigate } from 'react-router-dom';

export const ArmPlanTotal = () => {

	const navigate = useNavigate();

	const goToWelcome = () => {
		navigate('/bienvenido');
	}

	return (
		<div className="arm-plan-total">
			<div className="arm-plan-total__content-price">
				<p className="arm-plan-total__text arm-plan-total__text--big is-desktop">MONTO</p>
				<p className="arm-plan-total__amount">$ 35.00</p>
				<p className="arm-plan-total__text is-mobile">MENSUAL</p>
				<p className="arm-plan-total__text-roboto arm-plan-total__text-roboto--small is-desktop">mensuales</p>
			</div>
			<div className="arm-plan-total__content-benefits-list is-desktop">
				<p className="arm-plan-total__title-benefits">El precio incluye:</p>
				<ul className="arm-plan-total__benefits-list">
					<li className="arm-plan-total__text-roboto">Llanta de respuesto</li>
					<li className="arm-plan-total__text-roboto">Analisis de motor</li>
					<li className="arm-plan-total__text-roboto">Aros gratis</li>
				</ul>
			</div>
			<div className="arm-plan-total__btn">
				<BtnApp 
					title="lo quiero"
					handleClick={ goToWelcome }
				/>
			</div>
		</div>
	)
}