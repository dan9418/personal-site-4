import degree from '../index/Degree';
import accidental from '../../theory/accidental';
import config from '../../theory/config';
import Pod from './Pod';

export const NOTE = {
	Ab: { id: 'Ab', name: 'Ab', value: [8, 5] },
	A: { id: 'A', name: 'A', value: [9, 5] },
	'A#': { id: 'A#', name: 'A#', value: [10, 5] },
	Bb: { id: 'Bb', name: 'Bb', value: [10, 6] },
	B: { id: 'B', name: 'B', value: [11, 6] },
	'B#': { id: 'B#', name: 'B#', value: [0, 6] },
	Cb: { id: 'Cb', name: 'Cb', value: [11, 0] },
	C: { id: 'C', name: 'C', value: [0, 0] },
	'C#': { id: 'C#', name: 'C#', value: [1, 0] },
	Db: { id: 'Db', name: 'Db', value: [1, 1] },
	D: { id: 'D', name: 'D', value: [2, 1] },
	'D#': { id: 'D#', name: 'D#', value: [3, 1] },
	Eb: { id: 'Eb', name: 'Eb', value: [3, 2] },
	E: { id: 'E', name: 'E', value: [4, 2] },
	'E#': { id: 'E#', name: 'E#', value: [5, 2] },
	Fb: { id: 'Fb', name: 'Fb', value: [4, 3] },
	F: { id: 'F', name: 'F', value: [5, 3] },
	'F#': { id: 'F#', name: 'F#', value: [6, 3] },
	Gb: { id: 'Gb', name: 'Gb', value: [6, 4] },
	G: { id: 'G', name: 'G', value: [7, 4] },
	'G#': { id: 'G#', name: 'G#', value: [8, 4] }
};

const NOTE_VALUES = Object.values(NOTE);

/* export const parseString = keyString => {
	if (typeof keyString !== 'string' || !keyString.length) {
		throw ('Bad keystring args')
	}
	const [tonicStr, accidentalStr] = utils.splitAt(keyString, 1);

	const degreeIndex = DEGREE_MAPPING.findIndex(d => d.name === tonicStr);

	const accidental = ACCIDENTAL_VALUES.find(a => a.name === accidentalStr) || ACCIDENTAL.Natural;

	return {
		id: keyString,
		name: keyString,
		p: DEGREE_MAPPING[degreeIndex].pitch + accidental.offset,
		d: degreeIndex
	};
}; */


class Note extends Pod {
	static getName({ a }) {
		const reduced = Pod.reduce({ a });
		const [p, d] = reduced;
		const degreeName = degree.getName({ d });
		const offset = p - config.rootScale[d][0];
		const accidentalName = accidental.getName({ a: offset });
		return `${degreeName}${accidentalName}`;
	};

	getType() {
		return 'note';
	}
}

Note.preset = NOTE;
Note.presetValues = NOTE_VALUES;

export default Note;
