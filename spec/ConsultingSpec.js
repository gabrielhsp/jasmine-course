describe('Consulting', function() {
	const pacient = new Pacient('Pelu', 23, 78, 1.78);

	it('should return a 0 value if the consulting type is a return consulting', function() {
		let consulting = new Consulting(pacient, [], true, true);

		expect(consulting.price()).toEqual(0);
	});

	it('should charge 25 for each standard procedure', function() {
		let consulting = new Consulting(pacient, ['proc1', 'proc2'], false, false);

		expect(consulting.price()).toEqual(50);
	});

	it('should double the consulting price if the consulting is particular', function() {
		let consulting = new Consulting(pacient, ['proc1', 'proc2'], true, false);

		expect(consulting.price()).toEqual(50 * 2);
	});

	it('should charge each specific price for each procedure', function() {
		let consulting = new Consulting(pacient, ['procedimento-comum', 'raio-x', 'procedimento-comum2', 'gesso'], false, false);

		expect(consulting.price()).toEqual(25 + 55 + 25 + 32);
	});
});