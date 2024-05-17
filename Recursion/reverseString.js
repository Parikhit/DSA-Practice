const reverseString = (str) => {
    if (str.length <= 1) return str; //Base case

    return reverseString(str.slice(1)) + str[0];
};

reverseString('Parikhit');
