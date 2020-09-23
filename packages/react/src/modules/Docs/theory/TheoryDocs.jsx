import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';
import ModelRow from '../ModelRow';
import Fold from '../Fold';

const max = [12, 7];

const THEORY_DOCS_CONFIG = [
	{
		id: 'scale',
		name: 'Scale',
		functions: [
			{
				id: 'theory/scale/getNumeral',
				tags: [
					'theory','scale','getNumeral','roman numeral'
				],
				name: 'getNumeral: (A, d) => C',
				fn: PW_Core.models.theory.scale.getNumeral,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					d: 0
				},
				/*
				out: {
					id: '',
					name: 'C'
				}*/
				// components?
				propDefs: [
					{
						// component: 'ModelRow',
						// props
						name: 'A',
						mathType: 'podList',
						theoryType: 'noteList'
					},
					{
						name: 'd',
						mathType: 'integer',
						theoryType: 'degree'
					}
				],
				// outComp??
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'noteList'
				}
			},
			{
				id: 'theory/scale/getMode',
				name: 'getMode: (A, d) => C',
				fn: PW_Core.models.theory.scale.getMode,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					d: 0
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'noteList'
					},
					{
						name: 'd',
						mathType: 'integer',
						theoryType: 'degree'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'noteList'
				}
			},
			{
				id: 'theory/scale/transpose',
				name: 'transpose: (a, b) => C',
				fn: PW_Core.models.theory.scale.transpose,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					b: PW_Core.models.theory.interval.preset.P1.value
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'noteList'
					},
					{
						name: 'b',
						mathType: 'pod',
						theoryType: 'interval'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'noteList'
				}
			}
		]
	},
	{
		id: 'chord',
		name: 'Chord',
		functions: [
			{
				id: 'theory/chord/inversion',
				name: 'inversion: (A, n) => C',
				fn: PW_Core.models.theory.chord.getInversion,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					n: 0
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'noteList'
					},
					{
						name: 'n',
						mathType: 'integer',
						theoryType: 'pitch'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'noteList'
				}
			},
			{
				id: 'theory/chord/transpose',
				name: 'transpose: (a, b) => C',
				fn: PW_Core.models.theory.chord.transpose,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					b: PW_Core.models.theory.interval.preset.P1.value
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'noteList'
					},
					{
						name: 'b',
						mathType: 'pod',
						theoryType: 'interval'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'noteList'
				}
			}
		]
	}
];

const GenericFunctionDocs = ({ config }) => {
	const { id, name, fn, props: propsIn, propDefs, outDef } = config;

	const [props, setProps] = useState(propsIn);
	const setProp = (pName, pValue) => {
		const newProps = {
			...props,
			[pName]: pValue
		}
		setProps(newProps);
	};

	const out = fn(props);

	return (
		<Fold label={name} level={4}>
			<div className="card">
				{propDefs.map((p, i) => {
					const { name, mathType, theoryType } = p;
					const value = props[name];
					const setValue = v => setProp(name, v);
					return <ModelRow key={i} value={value} setValue={setValue} max={max} label={name} mathType={mathType} theoryType={theoryType} />;
				})}
				<ModelRow value={out} max={max} label={outDef.name} mathType={outDef.mathType} theoryType={outDef.theoryType} />
			</div>
		</Fold>
	);
}

const GenericModuleDocs = ({ config }) => {
	const { id, name, functions } = config;
	return (
		<Fold label={config.name} level={3}>
			{functions.map((c, i) => {
				return <GenericFunctionDocs config={c} key={i} />;
			})}
		</Fold>
	);
}

const TheoryDocs = () => {
	return (
		<Fold label={'Theory'} level={2}>
			{THEORY_DOCS_CONFIG.map((c, i) => {
				return <GenericModuleDocs config={c} key={i} />;
			})}
		</Fold>
	);
}

export default TheoryDocs;
