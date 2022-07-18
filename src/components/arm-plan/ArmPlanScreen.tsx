import { ArmPlanHeader } from './ArmPlanHeader';
import { ArmPlanOffOn } from './ArmPlanOffOn';
import { StepsApp } from '../shared/StepsApp';

export const ArmPlanScreen = () => {
	return (
		<>
			<StepsApp 
				step={2}
				totalStep={2}
			/>
			<ArmPlanHeader/>
			<ArmPlanOffOn/>
		</>
	)
}
