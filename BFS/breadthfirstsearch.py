def bfs(arr):
    visited  = [False] * len(arr)
    store = []
    queue = []
    distance = [-1] * len(arr)
    
    source = 0
    distance[source] = 0
    visited[source] = True
    queue.append(source)
    
    while queue:
        current = queue.pop(0)
        store.append(current)
        for neighbour in arr[current] :
            if not visited[neighbour] :
                visited[neighbour] = True
                distance[neighbour] = distance[current] + 1   
                queue.append(neighbour)
    map = []
    for i in range(len(arr)):
        map.append([store[i],distance[i]])
    return map


arr = [[1,2],[0,2,3],[0,1,4],[1,4],[2,3]]
print(bfs(arr))
