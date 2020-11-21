import React from "react";
import ViewerSubpanel from "../subpanels/viewers/ViewerSubpanel";
import Panel from "./Panel";

const OutputPanel = ({ outputDef }) => {
	return (
		<Panel name="Outputs">
			<ViewerSubpanel />
		</Panel>
	);
}

export default OutputPanel;
