//Run in Node.js
function swap(arr,a,b)
{
    let store = arr[a];
    arr[a] = arr[b];
    arr[b] = store;
}

function minPos(arr,start,end)
{
    let min = arr[start];
    let pos = start;
    for(let i=start; i<=end; i++)
    {    
        if(arr[i]<min)
        {
            min = arr[i];
            pos = i;
        }
    }
    return pos;
}

function selectionSort(arr)
{
    let length = arr.length-1;
    for(let i=0; i<length; i++)
    {
        let posMin = minPos(arr,i,length);
        swap(arr,posMin,i);
        console.log(arr);
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

    selectionSort(arr);

    console.log('Sorted array:', arr);

    readline.close();
});
