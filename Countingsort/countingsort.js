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
    let count = Array(max+1).fill(0);
    let sorted = Array(arr.length).fill(0);
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

function radixSort(arr)
{
    let digits = (findMax(arr)).toString().length;
    console.log("Count of digits in longest number: ", digits);

    for(let i=0; i<digits; i++)
    {
        let digArr = [];
        let queues = [];
        for(let j=0; j<10;j++)
        {
            queues.push([]);
        }
        for(let j=0; j<arr.length; j++)
        {
            let digit = Math.floor((arr[j]/(10 ** i)) % 10);
            digArr.push(digit);
            queues[digit].push(arr[j]);
        }
        let sortedDigs = countingSort(digArr);
        console.log("Queues of digits:", queues);
        console.log("Array of digits in", i, "th place:", digArr, "Sorted:", sortedDigs);

        let index = 0;
        for(let j=0; j<sortedDigs.length; j++)
        {
            let digit = sortedDigs[j];
            arr[index] = queues[digit].shift();
            index++;
        }
    }
    return arr;
}

function bucketSort(arr)
{
    if(arr.length <= 1)
    {
        return arr;
    }
    
    let max = findMax(arr);
    let buckets = [];
    let sorted = [];
    for(let i=0; i<arr.length; i++)
    {
        buckets[i] = [];
    }
    for(let i=0; i<arr.length; i++)
    {
        buckets[Math.floor(arr[i]*arr.length/(max+1))].push(arr[i]);
    }
    console.log("Buckets:", buckets);
    for(let i=0; i<arr.length; i++)
    {
        if(buckets[i].length > 0 && buckets[i].length < arr.length)
        {
            sorted = sorted.concat(bucketSort(buckets[i]));
        }
        else
        {
            sorted = sorted.concat(buckets[i]);
        }
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

    // console.log('Sorted array:', countingSort(arr));

    // console.log('Sorted array:',radixSort(arr));
    
    console.log('Sorted array:',bucketSort(arr));

    readline.close();
});
