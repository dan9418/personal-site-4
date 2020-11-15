import Utils from '../../Utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class PodUtils {

	// common

	static areEqual(a, b) {
		if (!b || b.length !== 2) return false;
		return a[0] === b[0] && a[1] === b[1];
	}

	static getName(a) {
		return 'Custom';
	}

	static getPreset(a) {
		return null;
	}

	static getPreview(a) {
		return JSON.stringify(a);
	}

	// utils

	static addPod(a, b, divisor = MAX) {
		console.log('PodUtils - addPod', a, b)
		const p = a[0] + b[0];//Utils.moduloSum(a[0], b[0], divisor[0]);
		const d = a[1] + b[1];//Utils.moduloSum(a[1], b[1], divisor[1]);

		console.log('PodUtils - addPod', p, d)
		return [p, d];
	}

	static addPodList(a, B, divisor = MAX) {
		const newValue = B.map((b) => this.addPod(a, b, divisor));
		return newValue;
	};

	static areListsEqual(A, B) {
		if (!A || !B) return false;
		if (!A.length || !B.length) return false;
		for (let i = 0; i < A.length; i++) {
			const a = A[i];
			const b = B[i];

			if (!this.areEqual(a, b))
				return false;
		}
		return true;
	}

	static reduceSingle(a, max = MAX) {
		const p = Utils.modulo(a[0], max[0]);
		const d = Utils.modulo(a[1], max[1]);
		return [p, d];
	}

	static reduceList(A, max = MAX) {
		const newValue = A.map((a) => {
			return this.reduceSingle(a, max);
		});
		return newValue;
	}

	static reduce(value, options = {}) {
		if (options.isList) {
			return this.reduceList(value, options.max);
		}
		else {
			return this.reduceSingle(value, options.max);
		}
	}

	/*findPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.find((n) => n[0] === pitch) || null;
	};

	findIndexOfPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.findIndex((n) => n[0] === pitch);
	};*/

}

export default PodUtils;
