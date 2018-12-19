describe('Min and Max', function() {
	const algorithm = new MinMax();

	it('should understand the numbers in a non sequential order', function() {
		algorithm.findNumbers([5, 15, 7, 9]);
		
		expect(algorithm.catchMax()).toEqual(15);
		expect(algorithm.catchMin()).toEqual(5);
	});
	
	it('should understand the numbers in a decrescent order', function() {
		algorithm.findNumbers([9, 8, 7, 6]);
		
		expect(algorithm.catchMax()).toEqual(9);
		expect(algorithm.catchMin()).toEqual(6);
	});
	
	it('should understand the numbers in a crescent order', function() {
		algorithm.findNumbers([2, 3, 4, 5]);
		
		expect(algorithm.catchMax()).toEqual(5);
		expect(algorithm.catchMin()).toEqual(2);
	});
});