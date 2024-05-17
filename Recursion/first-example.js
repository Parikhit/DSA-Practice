//Without Recursion

const countDown = (num) => {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }

    console.log('All done!');
};

countDown(10);

//With Recursion

const countDownWithRecursion = (num) => {
    if (num <= 0) {
        console.log('All Done!');
        return;
    }

    console.log(num);
    num--;

    countDownWithRecursion(num);
};

countDownWithRecursion(10);
