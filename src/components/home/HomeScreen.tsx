import { FooterApp } from "../shared/FooterApp"
import { HomeBanner } from "./HomeBanner"
import { HomeForm } from "./HomeForm"

export const HomeScreen = () => {
	return (
		<>
			<div className="home-screen">
				<HomeBanner/>
				<HomeForm/>
			</div>
			<div className="is-desktop">
				<FooterApp/>
			</div>
		</>
	)
}