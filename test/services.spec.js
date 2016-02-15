import { expect } from 'chai';
import * as services from '../app/scripts/services';

describe('Services', () => {

    it('should return true if the input is a palindrome', () => {
        const isPalindrome = services.isPalindrome('ovo');
        expect(isPalindrome).to.be.true;
    });

    it('should return false if the input is not a palindrome', () => {
        const isPalindrome = services.isPalindrome('macaco');
        expect(isPalindrome).to.be.false;
    });

})