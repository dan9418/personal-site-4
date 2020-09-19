const DEGREE = {
	C: {
		id: 'C',
		name: 'C',
		value: 0
	},
	D: {
		id: 'D',
		name: 'D',
		value: 1
	},
	E: {
		id: 'E',
		name: 'E',
		value: 2
	},
	F: {
		id: 'F',
		name: 'F',
		value: 3
	},
	G: {
		id: 'G',
		name: 'G',
		value: 4
	},
	A: {
		id: 'A',
		name: 'A',
		value: 5
	},
	B: {
		id: 'B',
		name: 'B',
		value: 6
	}
};

const DEGREE_VALUES = Object.values(DEGREE);

const DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

export default {
	preset: DEGREE,
	colorScheme: DEGREE_COLOR_SCHEME,
	getColor: d => DEGREE_COLOR_SCHEME[d],
	getName: d => DEGREE_VALUES[d].name
};
