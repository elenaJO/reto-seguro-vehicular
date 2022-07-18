import { CounterApp } from '../shared/CounterApp';

export const ArmPlanCounter = () => {

	const handleChangeValue = (value: number) => {
		console.log(value);
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
				minorRank={ 12500 }
				higherRank={ 16500}
				initialValue={ 12000 }
				changeValue={ true }
				handleChangeValue={ handleChangeValue }
			/>
    </div>
  )
}
