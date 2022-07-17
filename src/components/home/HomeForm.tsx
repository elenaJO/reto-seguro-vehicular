import { CheckBoxApp } from "../shared/CheckBoxApp"
import { InputApp } from "../shared/InputApp"
import { BtnApp } from '../shared/buttons/BtnApp';
import { SelectApp } from "../shared/SelectApp";
import { useState } from 'react';

export const HomeForm = () => {

	const [{ documentNumber,  phone, license}, handleInputChange] = useState({
		documentNumber: '',
		phone: '',
		license: '',
		typeDocument: 'dni',
		accept: false,
	})

	return (
		<div className="home-form">
			<h2 className="home-form__title">Déjanos tus datos</h2>
			<form>
				<div className="mb-16 home-form__multiple">
					<SelectApp optionalClass="home-form__select"/>
					<InputApp 
						optionalClass="home-form__input" 
						type="text"
						placeholder="Nro. de doc"
						name="documentNumber"
						value={ documentNumber }
						handleInputChange={ (e) => e.target }
					/>
				</div>
				<InputApp 
					optionalClass="mb-16" 
					type="text"
					placeholder="Celular"
					name="phone"
					value={ phone }
					handleInputChange={ (e) => e.target }
				/>
				<InputApp 
					optionalClass="mb-16" 
					type="text"
					placeholder="Placa"
					name="license"
					value={ license }
					handleInputChange={ (e) => e.target }
				/>
				<div className="home-form__multiple home-form__multiple--check">
					<CheckBoxApp/>
					<p className="home-form__text-check">Acepto la <span className="home-form__text-underline">Política de
						Protecciòn de Datos Personales</span> y los 
						<span className="home-form__text-underline">Términos y Condiciones.</span>
					</p>
				</div>

				<BtnApp title="cotízalo"/>
			</form>
		</div>
	)
}