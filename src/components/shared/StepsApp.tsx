import iconBack from '../../assets/icons/icon_back_purple.svg';
import { useNavigate } from 'react-router-dom';

type AutoDataStepsArgs = {
	totalStep: number,
	step: number,
}

export const StepsApp = ({ totalStep, step }: AutoDataStepsArgs) => {
	const navigate = useNavigate();

	const goToBack = () => {
		navigate(-1);
	}

	return (
		<>
			<div className="steps-app is-mobile">
				<img 
					src={iconBack} 
					alt="atras" 
					className="steps-app__back"
					height="32"
					onClick={ goToBack }
				/>
				<div className="steps-app__content-step">
					<span className="steps-app__step">PASO {step} DE {totalStep}</span>
					<div className="steps-app__bar">
						<div 
							className="steps-app__bar--active"
							style={{ width: `${(100/totalStep) * step}%` }}
						>
							</div>
						<div></div>
					</div>
				</div>
			</div>
			<div className="steps-app-desktop is-desktop">
				{Array.from(Array(totalStep), (e, i) => {
					return <div className="steps-app-desktop__container-step" key={ i }>
						<div className={`steps-app-desktop__step ${ step === i + 1 ? 'active' : '' }`}>{ i + 1 }</div>
						<span className={`steps-app-desktop__step-name ${ step === i + 1 ? 'active' : '' }`}>Arma tu plan</span>
					</div>
				})}
			</div>
		</>
	)
}