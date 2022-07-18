interface DataOptios {
	id: number | string;
	name: string;
}

export const DocumentOptions: DataOptios[] = [
	{
		id: 'dni',
		name: 'DNI'
	},
	{
		id: 'ce',
		name: 'CE'
	},
];

export const amounts: any = {
	partialTheft: 15,
	trafficAccident: 20,
	totalLoss: 50,
}

export const rangeOfValues = {
	max: 16500,
	min: 12500,
}

