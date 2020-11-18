import ColorUtils from '@pw/color/src/modules/ColorUtils';
import PodUtils from '@pw/core/src/modules/PodUtils';
import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_PROPS from "./Fretboard.defaults";

export const Fret = ({ stringTuning, stringIndex, fretIndex, podContext }) => {
	const { value, podType, isList } = podContext;

	const noteIndex = stringTuning + fretIndex;
	const pod = PodUtils.findPodWithPitch(isList ? value : [value], noteIndex);

	const color = ColorUtils.getPodColor(pod, podType)
	const colorStyles = ColorUtils.getStylesFromBgColor(color);

	const text = PodUtils.getPreview(pod, { podType });

	const style = {
		position: 'absolute',
		width: '90%',
		height: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%',
		...colorStyles
	};

	const classes = ['fret'];
	if (fretIndex === 0)
		classes.push('open');

	return (
		<div className={classes.join(' ')}>
			{false && <div className='fret-number'>{fretIndex + 1}</div>}
			<div className='fret-string' />
			<div className='label' style={style}>
				{text}
			</div>
			{false && <div className='fret-dots'>{api.getDotsForFret(fretIndex + 1)}</div>}
		</div>
	);
}

const getFrets = (props) => {
	const { fretLow, fretHigh, tuning, podContext } = props;
	//let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
	//let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

	const allFrets = [];
	for (let s = 0; s < tuning.length; s++) {
		for (let f = fretLow; f <= fretHigh; f++) {
			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					stringTuning={tuning[s]}
					stringIndex={s}
					fretIndex={f}
					podContext={podContext}
				/>
			);
		}
	}
	return allFrets;
}

const Fretboard = (userProps) => {
	const props = Object.assign({}, DEFAULT_PROPS, userProps);

	const numFrets = props.fretHigh - props.fretLow + 1;
	const numStrings = props.tuning.length;
	const gridTemplateColumns = api.getFretRatios(numFrets).map(n => n + 'fr').join(' ');
	const gridTemplateRows = `repeat(${numStrings}, 1fr)`;
	const fretboardStyles = {
		gridTemplateColumns,
		gridTemplateRows
	};

	return (
		<div className='fretboard' style={fretboardStyles}>
			{getFrets(props)}
		</div>
	);
}

export default Fretboard;
