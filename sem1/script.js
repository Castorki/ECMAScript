function mergeArrays(arr1, arr2) {
    let newArr = [];
    newArr.push(...arr1);
    newArr.push(...arr2);
    return newArr;
}

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

function removeDuplicate(...rest) {
    let arr = [];
    arr.push(...rest);
    console.log(arr);

    let filteredArr = arr.filter((arrElement, index) => arr.indexOf(arrElement) === index);

    return filteredArr;
}

console.log(removeDuplicate(1, 5, 7, 1, 9, 3, 9, 3, 6, 5, 4, 1, 0));

