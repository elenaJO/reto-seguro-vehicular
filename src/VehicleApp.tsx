import { BtnApp } from './components/shared/buttons/BtnApp';
import { FooterApp } from './components/shared/FooterApp';
import { HeaderApp } from './components/shared/HeaderApp';
import { HomeBanner } from './components/home/HomeBanner';

export const VehicleApp = () => {
	return (
		<div>
			<BtnApp title={'COTÍZALO'}/>
			<HeaderApp/>
			<HomeBanner/>
			<FooterApp/>	
		</div>
	)
}