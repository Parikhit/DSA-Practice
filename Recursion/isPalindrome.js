const isPalindrome = (str) => {
    const formattedStr = str.toLowerCase();
    if (formattedStr.length === 1) return true; //Base case
    if (formattedStr.length === 2) return str[0] === str[1];

    if (formattedStr[0] === formattedStr.slice(-1)) return isPalindrome(formattedStr.slice(1, -1));

    return false;
};

isPalindrome('Malayalam');
