// Take in 2d array in the structure
// node1:
// node2:
// distance:
// return shortest distance from start to end
function nodeCount(arr1,arr2)
{
    let max = arr1[0];
    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i] > max) max = arr1[i];
    }
    console.log("New max: ", max);
    for(let i=0; i<arr2.length; i++)
    {
        if(arr2[i] > max) max = arr2[i];
    }
    console.log("Final max: ",max)    
    return max;
}

function link(start,end,map,visited = new Set())
{
    if(start == end) return 0;
    visited.add(start);
    let shortest = Infinity; 
    
    for(let i=0;i<map[start].length;i++)
    {
        if(map[start][i] !== 0 && !visited.has(i))
        {
            let dist = map[start][i];
            let result = link(i, end, map, new Set(visited));
            if (typeof result == "number" && result !== Infinity) 
            {
                shortest = Math.min(shortest, dist + result);
                console.log(`Path found: ${start} → ${i} → ${end} = ${dist} + ${result} = ${shortest}`);
            }
        }
    }
    if(shortest == Infinity) return false;
    return shortest;
}

function dfs(node1arr,node2arr,distarr)
{
    let highest = nodeCount(node1arr,node2arr);
    let count = node1arr.length;
    let map = new Array(highest).fill(null).map(() => new Array(highest).fill(0))
    for(let i=0; i<count; i++)
    {
        let from = node1arr[i];
        let to = node2arr[i];
        let dist = distarr[i];
        map[from][to] = dist;
    }
    let shortest = link(1,highest,map);
    console.log("Shortest distance from 1 to",highest,":")
    return shortest;
}

// dfs([1,2,3,1],[2,3,4,4],[10,20,39,20]);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter from array (comma or space separated): ', (input) => 
{
    let arrfrom = input.split(/[\s,]+/).map(Number);
    readline.question('Enter to array (comma or space separated): ', (input) => 
    {
        let arrto = input.split(/[\s,]+/).map(Number);
        readline.question('Enter dist array (comma or space separated): ', (input) => 
        {
            let distarr = input.split(/[\s,]+/).map(Number);
            dfs(arrfrom,arrto,distarr);
            readline.close();
        });
    });
});
