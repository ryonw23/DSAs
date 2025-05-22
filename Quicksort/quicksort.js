//Run in Node.js
function partition(arr,low,high)
{
    let pivot = arr[high]; //Can be low, mid or high --> if mid then, mid = Math.floor((high+low)/2)
    let pivotPos = high;
    let index = low-1;
    for(let i=low; i<high; i++)
    {
        if(arr[i] <= pivot)
        {
            console.log(arr[i], " is less than", pivot);
            index++;
            let store = arr[i];
            arr[i] = arr[index];
            arr[index] = store;
            console.log("Place smaller than pivot to left: ", arr);
            console.log("Pivot pos: ", pivotPos);
        }
    }
    let store = arr[index+1];
    arr[index+1] = arr[pivotPos];
    arr[pivotPos] = store;
    console.log("Place pivot in position: ", arr);
    console.log("Pivot pos: ", index+1);
    return index+1;
}

function quickSort(arr,low,high)
{
    if(low<high)
    {
        let pos = partition(arr,low,high);
        quickSort(arr,low,pos-1);
        quickSort(arr,pos+1,high);
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

    quickSort(arr,0,arr.length-1);

    console.log('Sorted array:', arr);

    readline.close();
});
