import * as services from '../services';

export function checkPalindrome (input) {
    return {
        type: 'CHECK_PALINDROME',
        isPalindrome: services.isPalindrome(input),
        palindrome: input
    };
}
