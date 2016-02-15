const initialState = {
    isPalindrome: null,
    palindrome: null
};

export function palindrome (state = initialState, action) {
    
    switch (action.type) {
        case 'CHECK_PALINDROME':
            return {
                ...state,
                isPalindrome: action.isPalindrome,
                palindrome: action.palindrome
            };

        default:
            return state;
    }
}
