import logoRimac from '../../assets/images/logo-rimac.svg';
import imgPhone from '../../assets/icons/phone.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HeaderApp = () => {

	const location = useLocation()
	const [locationPage, setLocationPage] = useState('/registro')

	useEffect(() => {
    setLocationPage(location.pathname);
  }, [location])

	return (
		<div
			className={`header-app ${locationPage === '/registro' ? 'ishome': ''}`}
		>
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