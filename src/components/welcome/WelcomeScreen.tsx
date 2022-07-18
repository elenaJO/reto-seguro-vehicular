import { FooterApp } from "../shared/FooterApp"
import { WelcomeBanner } from "./WelcomeBanner"

export const WelcomeScreen = () => {
	return (
		<>
			<WelcomeBanner/>
			<div className="is-mobile">
				<FooterApp/>
			</div>
		</>
	)
}
