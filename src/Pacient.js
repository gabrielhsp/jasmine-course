class Pacient {
	constructor(name, age, weight, height) {
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.height = height;
	}

	/** This method shows the Pacient name and age inside an alert */
	print() {
		alert(`${this.name} tem ${this.age}`);
	}

	/**
	 * This method calculates the heart beat per minute using the Pacient age as reference
	 * @param {number} [year=365] the number of days inside a year
	 * @param {number} [hours=24] the number of hours of a day
	 * @param {number} [minutes=60] the number of minutes inside an hour
	 * @param {number} [heartBeatPerMinute=80] the heart beat per minute number
	 * @returns a number with the heart beat per minute of the Pacient
	 */
	heartBeat(year = 365, hours = 24, minutes = 60, heartBeatPerMinute = 80) {
		return this.age * year * hours * minutes * heartBeatPerMinute;
	}

	/** This method calculates the IMC of a Pacient */
	imc() {
		return this.weight / (this.height * this.height);
	}
}