//Run in Node.js
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
                let store = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = store;
                swapped = true;
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
