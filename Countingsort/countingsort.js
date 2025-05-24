function findMax(arr)
{
    let max = arr[0];    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return max;
}

function countingSort(arr)
{
    let max = findMax(arr);
    let count = Array(max+1);
    count.fill(0);
    let sorted = Array(arr.length);
    let pos = 0;

    for(let i=0; i<arr.length; i++)
    {
        count[arr[i]]++;
    }
    console.log("Count array: ", count);
    
    for(let i=0; i<max+1; i++)
    {    
        for(let j=pos; j<pos+count[i]; j++)
        {
            sorted[j] = i;
        }
        pos += count[i];
    }
    return sorted;
}
    

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter array (comma or space separated): ', (input) => 
{
    let arr = input.split(/[\s,]+/).map(Number);

    console.log('Original array:', arr);

    console.log('Sorted array:', countingSort(arr));

    readline.close();
});
