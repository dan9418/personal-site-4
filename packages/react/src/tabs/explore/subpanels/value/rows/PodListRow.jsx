import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import NumericInput from '../../../../../ui/NumericInput/NumericInput';
import { PresetCell } from './PodRow';

const PodListRow = ({ i, value, reducedValue, setValue, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const raw = value[i];
	const reduced = reducedValue[i];

	const setPod = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);

	const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);

	const moveDown = () => setValue([...value.slice(0, i - 1), value[i], value[i - 1], ...value.slice(i + 1)]);
	const moveUp = () => setValue([...value.slice(0, i), value[i + 1], value[i], ...value.slice(i + 2)]);
	const onReorder = v => {
		if (v > i) moveUp();
		if (v < i) moveDown();
	}

	return (
		<tr key={i}>
			<td>
				{
					isEditing ?
						<NumericInput value={i} setValue={onReorder} min={0} max={value.length - 1} />
						: i + 1
				}
			</td>
			<td>
				{JSON.stringify(raw)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<PresetCell value={reduced} setValue={setPod} isEditing={isEditing} podType={podType} />
			{isEditing &&
				<td>
					<ButtonInput onClick={remove}>X</ButtonInput>
				</td>
			}
		</tr>
	);
};

export default PodListRow;