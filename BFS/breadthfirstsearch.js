function bfs(arr){
    let visited  = new Array(arr.length).fill(false);
    let store = [];
    let queue = [];
    let distance = new Array(arr.length).fill(-1);
    
    let source = 0;
    distance[source] = 0;
    visited[source] = true;
    queue.push(source);
    while (queue.length != 0) {
        let current = queue.shift();
        store.push(current);
        for (let neighbour of arr[current]) {
            if(!visited[neighbour]) {
                visited[neighbour] = true;
                distance[neighbour] = distance[current] + 1;   
                queue.push(neighbour);
            }
        }
    }
    
    let map = []
    for (let i in arr){
        map.push([store[i],distance[i]])
    }
    return map;
}

let arr = [[1,2],[0,2,3],[0,1,4],[1,4],[2,3]]
console.log(bfs(arr))
