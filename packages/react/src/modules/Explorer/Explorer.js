import PW_Core from '@pw/core';
import React, { useState } from "react";
import Concept from '../Concept/Concept';
import Fretboard from '../Fretboard/_module';
import List from '../List/List';
import APIBrowser from './APIBrowser';
import "./Explorer.css";

const DEFAULT_PROPS = {
	colorFn: PW_Core.models.vector.colorBy({ type: 'degree' }),
	intervals: [],
	keyCenter: null
}

const Out = ({ keyCenterData, setKeyCenterData, intervalsData, setIntervalsData }) => {
	if (!keyCenterData || !intervalsData) return null;

	const keyCenter = keyCenterData.value;
	const intervals = intervalsData.value;

	const name = `${keyCenterData.name} ${intervalsData.name}`;

	const colorFn = DEFAULT_PROPS.colorFn;
	const viewer = Fretboard;

	const notes = PW_Core.models.vector.addMatrix({ a: keyCenter, B: intervals });
	const modes = PW_Core.models.matrix.getAllModes({ keyCenter, scale: intervals });
	const numerals = PW_Core.models.matrix.getAllNumerals({ keyCenter, scale: intervals });

	console.log(keyCenter, intervals, notes, modes, numerals);

	return (
		<div className='out'>
			<Concept
				name={name}
				keyCenterData={keyCenterData}
				setKeyCenterData={setKeyCenterData}
				intervalsData={intervalsData}
				setIntervalsData={setIntervalsData}
				notes={notes}
				colorFn={colorFn}
			/>
			<List name={`Modes`} viewer={viewer} list={modes} colorFn={colorFn} />
			<List name={`Roman Numerals`} viewer={viewer} list={numerals} colorFn={colorFn} />
		</div>
	);
}

const Explorer = () => {

	const [keyCenterData, setKeyCenterData] = useState(PW_Core.models.vector.preset.note.C);
	const [intervalsData, setIntervalsData] = useState(PW_Core.models.matrix.preset.scale.Major);

	return (
		<div className='explorer'>
			{false && <APIBrowser />}
			<Out
				keyCenterData={keyCenterData}
				setKeyCenterData={setKeyCenterData}
				intervalsData={intervalsData}
				setIntervalsData={setIntervalsData}
			/>
		</div>
	);
}

export default Explorer;
