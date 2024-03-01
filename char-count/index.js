// Give count for each characters in a string
// Account for only numbers & alphabets in string.
// Consider N or n to be same.
// Eliminate spaces

const charCount = (str) => {
    //Create an empty object to return
    let result = {};
    //Modifying string to lowercase and removing spaces if any.
    const string = str.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (/[a-z0-9]/.test(char)) {
            result[char] ? result[char]++ : (result[char] = 1);

            //Alternatively
            // result[char] = ++result[char] || 1;
        }
    }

    return result;
};

charCount('Parikhit');

// Alternate Solution (efficient than regex)

//Fn to check for alphanumeric for each char
const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) && //numeric 0-9
        !(code > 64 && code < 91) && // A-Z
        !(code > 96 && code < 123) // a-z
    ) {
        return false;
    }
    return true;
};

const charCount2 = (str) => {
    //Create an empty object to return
    let result = {};

    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
};
