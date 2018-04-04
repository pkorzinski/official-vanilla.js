import { expect } from 'chai';
import initOfficialVanillaJS from '../src/index';

describe('initOfficialVanillaJS', () => {
    it('should be a function', () => {
        expect(initOfficialVanillaJS).to.be.a.function;
    });

    it('should return nothing that can impact performance or size', function() {
        const result = initOfficialVanillaJS();
        expect(result).to.be.undefined;
    });
});
