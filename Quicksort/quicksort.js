//Run in Node.js
function swap(arr,a,b)
{
    let store = arr[a];
    arr[a] = arr[b];
    arr[b] = store;
}

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
            swap(arr,i,index);
            console.log("Place smaller than pivot to left: ", arr);
            console.log("Pivot pos: ", pivotPos);
        }
    }
    swap(arr,index+1,pivotPos);
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
