import { INTERVAL } from '../pod/interval';
import utils from '../../utils';
import pod from '../../models/pod/pod';
import podList from './podList';

export const CHORD = {
	Maj: { id: 'Maj', name: 'Major Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value] },
	Maj6: { id: 'Maj6', name: 'Major 6th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	Maj7: { id: 'Maj7', name: 'Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M7.value] },
	Min: { id: 'Min', name: 'Minor Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value] },
	Min6: { id: 'Min6', name: 'Minor 6th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	Min7: { id: 'Min7', name: 'Minor 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M7.value] },
	Dom7: { id: 'Dom7', name: 'Dominant 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	Dom7b9: { id: 'Dom7b9', name: 'Dominant 7th (b9)', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value, INTERVAL.m2.value] },
	Aug: { id: 'Aug', name: 'Augmented Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value] },
	Aug7: { id: 'Aug7', name: 'Augmented 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.m7.value] },
	AugM7: { id: 'AugM7', name: 'Augmented Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.M7.value] },
	Dim: { id: 'Dim', name: 'Diminished Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value] },
	Dim7: { id: 'Dim7', name: 'Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.d7.value] },
	HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.m7.value] },
	Sus2: { id: 'Sus2', name: 'Suspended 2nd', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.P5.value] },
	Sus4: { id: 'Sus4', name: 'Suspended 4th', value: [INTERVAL.P1.value, INTERVAL.P4.value, INTERVAL.P5.value] }
};

const CHORD_VALUES = Object.values(CHORD);

const getInversion = ({ A, n }) => {
	let result = [...A];
	result = utils.rotate(result, n);
	const octave = INTERVAL.P8.value;
	for (let i = 1; i <= n; i++) {
		const index = result.length - i;
		const a = result[index];
		result[index] = pod.addPod({ a, b: octave })
	}
	return result;
}

const transpose = ({ A, b }) => {
	return podList.addPod({ A, b });
}

const getName = ({ A }) => 'chord';

export default {
	preset: CHORD,
	presetValues: CHORD_VALUES,
	getInversion,
	transpose,
	getName
};
