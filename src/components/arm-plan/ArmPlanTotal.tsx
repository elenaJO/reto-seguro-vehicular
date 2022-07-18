import { BtnApp } from "../shared/buttons/BtnApp"

export const ArmPlanTotal = () => {
	return (
		<div className="arm-plan-total">
			<div>
				<p className="arm-plan-total__amount">$35.00</p>
				<p className="arm-plan-total__text">MENSUAL</p>
			</div>
			<div className="arm-plan-total__btn">
				<BtnApp title="lo quiero"/>
			</div>
		</div>
	)
}