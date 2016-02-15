import { expect } from 'chai';
import * as actions from '../app/scripts/actions';

describe('Actions', () => {

    it('should set is palindrome', () => {
        const input = 'ovo';
        const action = actions.checkPalindrome(input);
        const expected = {
            type: 'CHECK_PALINDROME',
            isPalindrome: true
        }

        expect(action.isPalindrome).to.be.true;
    });

})