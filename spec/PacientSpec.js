describe('Pacient', function() {
	const pacient = new Pacient('Gabriel', 23, 78, 1.78);

	it('should calculate the IMC value', function() {
		expect(pacient.imc()).toEqual(78 / (1.78 * 1.78));
	});

	it('should calculate the heart beat per minute', function() {
		expect(pacient.heartBeat()).toEqual(23 * 365 * 24 * 60 * 80);
	});
});