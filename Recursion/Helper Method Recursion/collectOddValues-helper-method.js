const collectOddValues = (arr) => {
    let result = [];

    const helper = (helperInput) => {
        if (helperInput.length === 0) return; //Base case

        if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

        helper(helperInput.slice(1));
    };

    helper(arr);

    return result;
};

collectOddValues([1, 3, 5, 7, 9, 2]);
