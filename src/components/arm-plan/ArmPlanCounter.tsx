import { useDispatch, useSelector } from 'react-redux';
import { setCoverageAmount } from '../../store/vehicle/vehicleSlice';

import { CounterApp } from '../shared/CounterApp';
import { rangeOfValues } from '../../utils/dataEnum';

export const ArmPlanCounter = () => {
	const dispatch = useDispatch();

	const { coverageAmount } = useSelector((state: any) => state.vehicle);

  const handleChangeValue = (value: number) => {
		dispatch(setCoverageAmount(value));
	}

  return (
    <div className="arm-plan-counter">
			<div>
				<p className="arm-plan-counter__text--small">Indica la suma asegurada</p>
				<div className="mb-16">
					<span className="arm-plan-counter__price text-left">MIN $12.500 </span>
					<span className="arm-plan-counter__price text-right">MAX $16,500</span>
				</div>
			</div>
      <CounterApp
				numberAdd={ 100 }
				minorRank={ rangeOfValues.min }
				higherRank={ rangeOfValues.max }
				initialValue={ coverageAmount }
				changeValue={ true }
				handleChangeValue={ handleChangeValue }
			/>
    </div>
  )
}