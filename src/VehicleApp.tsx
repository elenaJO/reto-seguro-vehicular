import { FooterApp } from './components/shared/FooterApp';
import { HeaderApp } from './components/shared/HeaderApp';
import { HomeScreen } from './components/home/HomeScreen';

export const VehicleApp = () => {
	return (
		<div>
			<HeaderApp/>
			<HomeScreen/>
			<FooterApp/>	
		</div>
	)
}