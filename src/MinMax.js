function MinMax() {
	let min;
	let max;

	const clazz = {
		findNumbers: (nums) => {
			min = Number.MAX_VALUE;
			max = Number.MIN_VALUE;
	
			nums.forEach((num) => {
				if (num < min) min = num;
				if (num > max) max = num;
			});
		},
	
		catchMin: () => min,

		catchMax: () => max
	};

	return clazz;
}