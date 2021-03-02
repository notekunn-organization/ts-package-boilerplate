import { HelloWord } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe('First test', () => {
	it('should return Hello string', () => {
		const result = HelloWord('Linh');
		expect(result).to.equal('Hello Linh');
	});
});
