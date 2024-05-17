const collectOddValues = (arr) => {
    let result = [];

    if (arr.length === 0) return result; //Base case

    if (arr[0] % 2 !== 0) result.push(arr[0]);

    result = [...result, ...collectOddValues(arr.slice(1))];

    return result;
};

collectOddValues([2, 3, 4, 1, 5, 6]);
