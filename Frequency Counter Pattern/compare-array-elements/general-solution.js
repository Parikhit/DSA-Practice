//Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be same and not the position.
//Eg same([1,2,3], [4,1,9])   true
// same([1,2,3], [1,9]) false
//same([1,2,1],[4,4,1]) false

//O(n2) solution

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        if (correctIndex === -1) return false;

        arr2.splice(correctIndex, 1); //removes that index
    }

    return true;
};

same([1, 2, 3], [1, 9, 4]);
