import React from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import { VIEWERS } from "../../../../viewers/viewers";
import Subpanel from "../Subpanel";

const ViewerBar = () => {
	const { viewer, setViewer } = usePodContext();
	const { isEditing } = useEditContext();

	const viewerDef = VIEWERS.find(p => p.id === viewer.id);

	return (
		<div className='input-bar'>
			<div>Component</div>
			{isEditing ?
				<DropdownInput options={VIEWERS} value={viewerDef} setValue={setViewer} />
				: viewer.name}
		</div>
	);
};

const ViewerBox = () => {
	const podContext = usePodContext();
	const { viewer, setViewer, viewerProps, setViewerProps } = podContext;
	const ViewerComponent = podContext.viewer.component;
	const PanelComponent = podContext.viewer.panelComponent;

	return (
		<>
			<ViewerBar />
			{PanelComponent && <PanelComponent />}
			<div className="viewer-box">
				<ViewerComponent {...viewerProps} />
			</div>
		</>
	);
};


const ViewerSubpanel = () => {
	return (
		<Subpanel name="Viewer"  >
			<ViewerBox />
		</Subpanel>
	);
};

export default ViewerSubpanel;