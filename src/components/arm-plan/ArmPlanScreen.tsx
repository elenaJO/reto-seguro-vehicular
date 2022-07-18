import { ArmPlanCounter } from './ArmPlanCounter';
import { ArmPlanHeader } from "./ArmPlanHeader"
import { ArmPlanOffOn } from "./ArmPlanOffOn"
import { ArmPlanTotal } from "./ArmPlanTotal"
import { StepsApp } from "../shared/StepsApp"

export const ArmPlanScreen = () => {
	return (
		<div className="arm-plan-screen">
			<div className="arm-plan-screen__steps">
				<StepsApp
					step={2}
					totalStep={2}
				/>
			</div>
			<div className="arm-plan-screen__amounts">
				<div className="arm-plan-screen__coverage">
					<ArmPlanHeader/>
					<ArmPlanCounter/>
					<ArmPlanOffOn/>
				</div>
				<ArmPlanTotal/>
			</div>
		</div>
	)
}