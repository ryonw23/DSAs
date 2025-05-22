function merge(arr,low,mid,high)
{
    let l = arr.slice(low,mid+1);
    let r = arr.slice(mid+1,high+1);
    console.log("left arr: ", l, "right arr: ", r);
    let i = 0;
    let j = 0;
    let index = low;
    while(i < l.length && j < r.length)
    {
        if(l[i] <= r[j])
        {
            arr[index] = l[i];
            i++;
        }
        else
        {
            arr[index] = r[j];
            j++;
        }
        index++;
    }
    while(i < l.length)
    {
        arr[index] = l[i];
        i++
        index++
    }
    while(j < r.length)
    {
        arr[index] = r[j];
        j++
        index++
    }
    console.log("current array state: ", arr)
}
        

function mergeSort(arr,low,high)
{
    if(low < high)
    {
        let mid = Math.floor((low+high)/2);
        mergeSort(arr,low,mid);
        mergeSort(arr,mid+1,high);
        merge(arr,low,mid,high);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter array (comma or space separated): ', (input) => {
    let arr = input.split(/[\s,]+/).map(Number);

    console.log('Original array:', arr);

    mergeSort(arr, 0, arr.length - 1);

    console.log('Sorted array:', arr);

    readline.close();
});
