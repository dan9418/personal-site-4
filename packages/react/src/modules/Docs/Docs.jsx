import React, { useState } from "react";
import DropdownInput from '../ui/DropdownInput/DropdownInput';
import DOCS_CONFIG from "./Docs.config";
import "./Docs.css";
import FunctionPanel from "./FunctionPanel";

const MODULE = DOCS_CONFIG.modules.find(x => x.id === 'model');
const SUBMODULE = MODULE.submodules.find(x => x.id === 'model/pod');
const FN = SUBMODULE.functions.find(x => x.id === 'model/pod/addPodList');

const Docs = () => {
	const [module, setModule] = useState(MODULE);
	const [submodule, setSubmodule] = useState(SUBMODULE);
	const [fnDef, setFnDef] = useState(FN);

	return (
		<>
			<div className="explore">
				<DropdownInput options={DOCS_CONFIG.modules} value={module} setValue={setModule} />
				<DropdownInput options={module.submodules} value={submodule} setValue={setSubmodule} />
				<DropdownInput options={submodule.functions} value={fnDef} setValue={setFnDef} />
			</div>
			<FunctionPanel fnDef={fnDef} />
		</>
	);
};

export default Docs;
