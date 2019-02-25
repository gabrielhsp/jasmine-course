class Consulting {
	constructor(pacient, procedures, isParticular, isReturn) {
		this.pacient = pacient;
		this.procedures = procedures;
		this.isParticular = isParticular;
		this.isReturn = isReturn;
	}

	price() {
		if (isReturn) return 0;

		let finalPrice = 0;

		procedures.forEach(procedure => {
			if ('raio-x' === procedure) finalPrice += 55;

			else if ('gesso' === procedure) finalPrice += 32;
			
			else finalPrice += 25;

			if (isParticular) finalPrice *= 2;

			return finalPrice;
		});
	}
}