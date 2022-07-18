import imgOne from '../../assets/icons/icon_theft.svg';
import imgTwo from '../../assets/icons/icon_damage.svg';
import imgThree from '../../assets/icons/icon_perdidatotal.svg';
import iconDown from '../../assets/icons/check_purple.svg';
import { SwitchApp } from '../shared/SwitchApp';

export const ArmPlanTab = () => {
	return (
		<div className="arm-plan-tab">
			<div className="arm-plan-tab__titles">
				<div className="arm-plan-tab__title">
					Protege a tu auto
				</div>
				<div className="arm-plan-tab__title">
					Protege a los que te rodean
				</div>
				<div className="arm-plan-tab__title">
					Mejora tu plan
				</div>
			</div>
			<div className="arm-plan-tab__content">
				<div className="arm-plan-tab__content-tab">
					<div className="arm-plan-tab__content-tab--title">
						<div className="arm-plan-tab__content-tab--title-img">
							<img src={imgOne} alt="" />
							<span className="arm-plan-tab__content-tab__case">Llanta robada</span>
						</div>
						<SwitchApp/>
					</div>
					<div className="arm-plan-tab__content-tab__content-text">
						<p className="arm-plan-tab__content-tab__paragraph mb-16">He salido de casa a las cuatro menos cinco 
							para ir a la academia de ingles de mi pueblo 
							(Sant Cugat, al lado de Barcelona) con mi bici, na 
							llego a la academia que está en el centro del 
							pueblo en una plaza medio-grande y dejo donde 
							siempre la bici atada con una pitón a un sitio de 
							esos de poner las bicis
						</p>
						<button className="arm-plan-tab__content-tab__btn">
							<span className="arm-plan-tab__content-tab__btn-title">VER MENOS</span>
							<img src={iconDown} alt="check" />
						</button>
					</div>
				</div>
				<div className="arm-plan-tab__content-tab">
					<div className="arm-plan-tab__content-tab--title">
						<div className="arm-plan-tab__content-tab--title-img">
							<img src={imgTwo} alt="" />
							<span className="arm-plan-tab__content-tab__case">Llanta robada</span>
						</div>
						<SwitchApp/>
					</div>
					<div className="arm-plan-tab__content-tab__content-text">
						<p className="arm-plan-tab__content-tab__paragraph mb-16">He salido de casa a las cuatro menos cinco 
							para ir a la academia de ingles de mi pueblo 
							(Sant Cugat, al lado de Barcelona) con mi bici, na 
							llego a la academia que está en el centro del 
							pueblo en una plaza medio-grande y dejo donde 
							siempre la bici atada con una pitón a un sitio de 
							esos de poner las bicis
						</p>
						<button className="arm-plan-tab__content-tab__btn">
							<span className="arm-plan-tab__content-tab__btn-title">VER MENOS</span>
							<img src={iconDown} alt="check" />
						</button>
					</div>
				</div>
				<div className="arm-plan-tab__content-tab">
					<div className="arm-plan-tab__content-tab--title">
						<div>
							<img src={imgThree} alt="" />
							<span className="arm-plan-tab__content-tab__case">Llanta robada</span>
						</div>
						<SwitchApp/>
					</div>
					<div className="arm-plan-tab__content-tab__content-text">
						<p className="arm-plan-tab__content-tab__paragraph mb-16">He salido de casa a las cuatro menos cinco 
							para ir a la academia de ingles de mi pueblo 
							(Sant Cugat, al lado de Barcelona) con mi bici, na 
							llego a la academia que está en el centro del 
							pueblo en una plaza medio-grande y dejo donde 
							siempre la bici atada con una pitón a un sitio de 
							esos de poner las bicis
						</p>
						<button className="arm-plan-tab__content-tab__btn">
							<span className="arm-plan-tab__content-tab__btn-title">VER MENOS</span>
							<img src={iconDown} alt="check" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}