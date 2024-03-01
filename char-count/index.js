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
