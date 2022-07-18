import { HeaderApp } from '../components/shared/HeaderApp';
import { ArmPlanScreen } from '../components/arm-plan/ArmPlanScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import ScrollToTop from '../components/shared/ScrollToTop';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
  } from "react-router-dom";
  

export const AppRouter = () => {
	return (
		<>
			<Router>
				<HeaderApp/>
				<ScrollToTop />
				<Routes>
					<Route path="/registro" element={ <HomeScreen/> }/>
					<Route path="/arma-plan" element={ <ArmPlanScreen/> }/>
					<Route path="/*" element={ <Navigate to="/registro" />}/>
				</Routes>
			</Router>
		</>
	)
}
