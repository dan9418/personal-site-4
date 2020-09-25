import React from 'react';
import './Docs.css';
import PW_Core from '@pw/core';

import Fold from './Fold';
import { GenericModuleDocs } from './GenericDocs';

const ROOT_LEVEL = 1;

const DOCS_CONFIG = {
	id: 'root',
	name: 'Play What?',
	modules: [
		{
			id: 'model',
			name: 'Models',
			submodules: [
				{
					id: 'model/scalar',
					name: 'Scalar',
					functions: [
						{
							id: 'model/scalar/modulo',
							name: 'modulo: (a, divisor) => c',
							fn: PW_Core.models.math.scalar.modulo,
							props: {
								a: PW_Core.models.theory.degree.preset.C.value,
								divisor: 7
							},
							propDefs: [
								{
									name: 'a',
									mathType: 'scalar',
									podType: null
								},
								{
									name: 'divisor',
									mathType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								mathType: 'scalar',
								podType: null
							}
						},
						{
							id: 'model/scalar/moduloSum',
							name: 'moduloSum: (a, b, divisor) => c',
							fn: PW_Core.models.math.scalar.moduloSum,
							props: {
								a: PW_Core.models.theory.degree.preset.C.value,
								b: PW_Core.models.theory.degree.preset.F.value,
								divisor: 7
							},
							propDefs: [
								{
									name: 'a',
									mathType: 'scalar',
									podType: null
								},
								{
									name: 'b',
									mathType: 'scalar',
									podType: null
								},
								{
									name: 'divisor',
									mathType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								mathType: 'scalar',
								podType: null
							}
						}
					]
				},
				{
					id: 'model/vector',
					name: 'Vector',
					functions: [
						{
							id: 'model/vector/addVector',
							name: 'addVector: (a, b) => c',
							fn: PW_Core.models.math.vector.addVector,
							props: {
								a: PW_Core.models.theory.interval.preset.M3.value,
								b: PW_Core.models.theory.interval.preset.P5.value
							},
							propDefs: [
								{
									name: 'a',
									mathType: 'vector',
									podType: null
								},
								{
									name: 'b',
									mathType: 'vector',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								mathType: 'vector',
								podType: null
							}
						}
					]
				}
			]
		},
		{
			id: 'theory',
			name: 'Theory',
			submodules: [
				{
					id: 'pitch',
					name: 'Pitch (scalar)',
					functions: [
						{
							id: 'theory/pitch/getName',
							name: 'getName: (p) => name',
							fn: PW_Core.models.theory.pitch.getName,
							props: {
								p: PW_Core.models.theory.pitch.preset.middleC.value
							},
							propDefs: [
								{
									name: 'p',
									mathType: 'scalar',
									podType: 'degree'
								}
							],
							outDef: {
								name: 'name',
								mathType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'degree',
					name: 'Degree (scalar)',
					functions: [
						{
							id: 'theory/degree/getName',
							name: 'getName: (d) => name',
							fn: PW_Core.models.theory.degree.getName,
							props: {
								d: PW_Core.models.theory.degree.preset.C.value
							},
							propDefs: [
								{
									name: 'd',
									mathType: 'scalar',
									podType: 'degree'
								}
							],
							outDef: {
								name: 'name',
								mathType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'accidental',
					name: 'Accidental (scalar)',
					functions: [
						{
							id: 'theory/accidental/getName',
							name: 'getName: (a) => name',
							fn: PW_Core.models.theory.accidental.getName,
							props: {
								a: PW_Core.models.theory.accidental.preset.natural.value
							},
							propDefs: [
								{
									name: 'a',
									mathType: 'scalar',
									podType: 'accidental'
								}
							],
							outDef: {
								name: 'name',
								mathType: 'string',
								podType: 'accidental'
							}
						}
					]
				},
				{
					id: 'interval',
					name: 'Interval (vector)',
					functions: [
						{
							id: 'theory/interval/getName',
							name: 'getName: (A) => name',
							fn: PW_Core.models.theory.interval.getName,
							props: {
								A: PW_Core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'A',
									mathType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'name',
								mathType: 'string',
								podType: 'interval'
							}
						}
					]
				},
				{
					id: 'note',
					name: 'Note (vector)',
					functions: [
						{
							id: 'theory/note/getName',
							name: 'getName: (A) => name',
							fn: PW_Core.models.theory.note.getName,
							props: {
								A: PW_Core.models.theory.note.preset.C.value
							},
							propDefs: [
								{
									name: 'A',
									mathType: 'vector',
									podType: 'note'
								}
							],
							outDef: {
								name: 'name',
								mathType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'chord',
					name: 'Chord (matrix)',
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
									mathType: 'matrix',
									podType: 'note'
								},
								{
									name: 'n',
									mathType: 'scalar',
									podType: 'pitch'
								}
							],
							outDef: {
								name: 'C',
								mathType: 'matrix',
								podType: 'note'
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
									mathType: 'matrix',
									podType: 'note'
								},
								{
									name: 'b',
									mathType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								mathType: 'matrix',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'scale',
					name: 'Scale (matrix)',
					functions: [
						{
							id: 'theory/scale/getNumeral',
							tags: [
								'theory', 'scale', 'getNumeral', 'roman numeral'
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
									mathType: 'matrix',
									podType: 'note'
								},
								{
									name: 'd',
									mathType: 'scalar',
									podType: 'degree'
								}
							],
							// outComp??
							outDef: {
								name: 'C',
								mathType: 'matrix',
								podType: 'note'
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
									mathType: 'matrix',
									podType: 'note'
								},
								{
									name: 'd',
									mathType: 'scalar',
									podType: 'degree'
								}
							],
							outDef: {
								name: 'C',
								mathType: 'matrix',
								podType: 'note'
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
									mathType: 'matrix',
									podType: 'note'
								},
								{
									name: 'b',
									mathType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								mathType: 'matrix',
								podType: 'note'
							}
						}
					]
				}
			]
		}
	]
};

const Docs = () => (
	<div className="docs">
		<Fold label={'Docs'} level={ROOT_LEVEL}>
			{DOCS_CONFIG.modules.map((c, i) => {
				return <GenericModuleDocs config={c} key={i} level={ROOT_LEVEL + 1} />;
			})}
		</Fold>
	</div>
);

export default Docs;
