import pod from '../pod/pod'
import index from '../index/index';
import note from '../pod/note';
import interval from '../pod/interval';

// Constants

const DEFAULT_POD_LIST = [[0, 0]];
const DEFAULT_POD_LIST_OPTIONS = {
	reduced: true
};

class PodList {

	constructor(value = DEFAULT_POD_LIST, options = {}) {
		this.value = value;
		this.options = { ...DEFAULT_POD_LIST_OPTIONS, ...options };
	}

	/*static isValid(podList) {
		return podList !== null && Array.isArray(podList) && podList.find((v) => !pod.isValid(v));
	};

	static areEqual({ list1, list2 }) {
		if (!list1 || !list2) return false;
		if (list1.length !== list2.length) return false;
		for (let i = 0; i < list1.length; i++) {
			if (!pod.areEqual({ pod1: list1[i], pod2: list2[i] })) { return false; }
		}
		return true;
	};*/

	static reduce() {
		const A = this.value;
		return A.map((a) => pod.reduce({ a }));
	}

	static getName() {
		const A = this.value;
		return JSON.stringify(A);
	}

	static findPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.find((n) => n[0] === pitch) || null;
	};

	static findIndexOfPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.findIndex((n) => n[0] === pitch);
	};

	static addPod(b) {
		const A = this.value;
		return A.map((a) => pod.addPod({ a, b }));
	}

}

export default PodList;
