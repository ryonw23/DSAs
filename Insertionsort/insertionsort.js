//Run in Node.js
function insertionSort(arr)
{
    let length = arr.length;
    for(let i=1; i<length; i++)
    {
        let ins = arr[i];
        index = i-1;
        while(index>=0 && ins<arr[index])
        {
            arr[index+1] = arr[index];
            index--;
        }
        arr[index+1] = ins;
        console.log(arr)
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter array (comma or space separated): ', (input) => 
{
    let arr = input.split(/[\s,]+/).map(Number);

    console.log('Original array:', arr);

    insertionSort(arr);

    console.log('Sorted array:', arr);

    readline.close();
});
