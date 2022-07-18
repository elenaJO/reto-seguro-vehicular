import logoRimac from '../../assets/images/logo-rimac.svg';
import imgPhone from '../../assets/icons/phone.svg';

console.log('imgPhone', imgPhone)

export const HeaderApp = () => {

	return (
		<div className="header-app">
			<div>
				<img 
					src={logoRimac} 
					alt="logo-rimac"
					height="16"
				/>
			</div>
			<div>
				<div className="header-app__content-call">
					<img
						src={imgPhone} 
						alt="telefono"
						height="19"
					/>
					<span className="header-app__text--call">Llámanos</span>
				</div>
			</div>
		</div>
	)
}
