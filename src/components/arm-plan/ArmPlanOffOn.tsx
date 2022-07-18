import { ArmPlanTab } from "./ArmPlanTab"

export const ArmPlanOffOn = () => {
	return (
		<div className="arm-plan-offon">
			<h3 className="arm-plan-offon__title">Agrega o quita coberturas</h3>
			<div>
				<ArmPlanTab/>
			</div>
		</div>
	)
}
