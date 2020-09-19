import React from 'react';
import Fold from './Fold';
import './Docs.css';

// Math
import IntegerDocs from './math/IntegerDocs';
import PodDocs from './math/PodDocs';
import PodListDocs from './math/PodListDocs';
import RootDocs from './RootDocs';

// Theory


const Docs = () => (
	<div className="docs">
		<Fold label="Root">
			<RootDocs />
		</Fold>
		<Fold label="Theory">

		</Fold>
		<Fold label="Math">
			<IntegerDocs />
			<PodDocs />
			<PodListDocs />
		</Fold>
	</div>
);

export default Docs;