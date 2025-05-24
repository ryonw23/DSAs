//Run in Node.js
function swap(arr,a,b)
{
    let store = arr[a];
    arr[a] = arr[b];
    arr[b] = store;
}

function bubbleSort(arr)
{
    let swapped = true;
    let length = arr.length - 1;
    while(swapped)
    {
        swapped = false;
        for(let i=0; i<length;i++)
        {
            if(arr[i]>arr[i+1])
            {
                swap(arr,i,i+1);
                swapped = true;
                console.log(arr);
            }
        }
        length--;
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

    bubbleSort(arr);

    console.log('Sorted array:', arr);

    readline.close();
});
