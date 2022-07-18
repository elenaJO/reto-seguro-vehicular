import imgOne from '../../assets/icons/icon_theft.svg';
import imgTwo from '../../assets/icons/icon_damage.svg';
import imgThree from '../../assets/icons/icon_perdidatotal.svg';
import iconDown from '../../assets/icons/check_purple.svg';
import iconTop from '../../assets/icons/check_top.svg';
import check from '../../assets/icons/chevrot.svg';
import add from '../../assets/icons/add.svg'
import remove from '../../assets/icons/remove.svg'
import { SwitchApp } from '../shared/SwitchApp';
import { useDispatch, useSelector } from 'react-redux';
import { amounts, rangeOfValues } from '../../utils/dataEnum';
import { useState, useEffect, useRef } from 'react';
import { addCoverageAmount, toggleCoverages } from '../../store';

export const ArmPlanTab = () => {
	const dispatch = useDispatch();

	const { coverages, coverageAmount } = useSelector((state: any) => state.vehicle);

	const firstRender = useRef(false)

	const handleCheckPartial = (e: any) => {
		firstRender.current = true
		const modAmount = e.target.checked ? amounts[e.target.name] : (amounts[e.target.name] * -1);
		changeTab(e.target.name, e.target.checked, 'value')
		dispatch(addCoverageAmount(modAmount));
		dispatch(toggleCoverages({ name: e.target.name, value: e.target.checked }))
	}

	const checkedCoverage = (value: string) => {
		return coverages.includes(value)
	}

	const [tabs, setTabs] = useState<any>({
		partialTheft: {
			id: 1,
			title: 'LLanta robada',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'partialTheft',
			value: checkedCoverage('partialTheft'),
			open: false,
			image: imgOne,
			disabled: false,
		},
		trafficAccident: {
			id: 2,
			title: 'Choque y/o pasarte la luz roja',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'trafficAccident',
			value: checkedCoverage('trafficAccident'),
			open: false,
			image: imgTwo,
			disabled: false,
		},
		totalLoss: {
			id: 3,
			title: 'Atropello en la vía Evitamiento',
			text: `He salido de casa a las cuatro menos cinco para ir a 
				la academia de ingles de mi pueblo (Sant Cugat,
				al lado de Barcelona) con mi bici,
				na llego a la academia que está en el 
				centro del pueblo en una plaza medio-grande
				y dejo donde siempre la bici atada con una pitón a un
				sitio de esos de poner las bicis`,
			name: 'totalLoss',
			value: checkedCoverage('totalLoss'),
			open: false,
			image: imgThree,
			disabled: false,
		}
	})

	const changeTab = (name: string, value: boolean, key: string) => {
		const newT = { ...tabs };
		newT[name][key] = value;
		setTabs({ ...newT });
	}

	useEffect(() => {
		if (tabs.trafficAccident.value && coverageAmount > 16000) {
			handleCheckPartial({ 
				target: {
					checked: false,
					name: 'trafficAccident'
				}
			})
		} else if (!tabs.trafficAccident.value && coverageAmount <= 16000) {
			handleCheckPartial({ 
				target: {
					checked: true,
					name: 'trafficAccident'
				}
			})
		}
		changeTab('trafficAccident', 16000 >= coverageAmount, 'value')

		changeTab(
			'totalLoss',
			tabs.totalLoss.value 
				? coverageAmount - amounts.totalLoss < rangeOfValues.min 
				: coverageAmount + amounts.totalLoss >= rangeOfValues.max,
			'disabled'
		)

		changeTab(
			'partialTheft',
			tabs.partialTheft.value 
				? coverageAmount - amounts.partialTheft < rangeOfValues.min 
				: coverageAmount + amounts.partialTheft >= rangeOfValues.max,
			'disabled'
		)
	}, [coverageAmount])

	useEffect(() => {
		if (!firstRender.current) {
			handleCheckPartial({ 
				target: {
					checked: tabs.trafficAccident.value,
					name: 'trafficAccident'
				}
			})
		}
	}, [])
	

	return (
		<div className="arm-plan-tab">
			<div className="arm-plan-tab__titles">
				<div className="arm-plan-tab__title arm-plan-tab__title--active">
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
				{Object.keys(tabs) && Object.keys(tabs).map((key, index) => (
					<div className="arm-plan-tab__content-tab" key={ index }>
						<div className="arm-plan-tab__content-tab--title">
							<div className="arm-plan-tab__content-tab--title-img">
								<img src={tabs[key].image} alt="" />
								<span className="arm-plan-tab__content-tab__case">{ tabs[key].title }</span>
							</div>
							<SwitchApp
								name={ tabs[key].name }
								handleCheckChange={ handleCheckPartial }
								checked={ tabs[key].value || false}
								disabled={ tabs[key].disabled }
							/>
						</div>
						<div className="arm-plan-tab__content-tab__content-text">
							<p 
								className={`arm-plan-tab__content-tab__paragraph mb-16 ${!tabs[key].open ? 'not-show': ''}`}
							>
								{ tabs[key].text }
							</p>
							<button 
								className="arm-plan-tab__content-tab__btn"
								onClick={ () => changeTab(key, !tabs[key].open, 'open')}
							>
								<span 
									className={ `arm-plan-tab__content-tab__btn-title ${tabs[key].open ? 'down' : ''}`}
								>
									VER { tabs[key].open ? 'MENOS' : 'MÁS'}
								</span>
								<img src={tabs[key].open ? iconTop: iconDown} alt="check" />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
