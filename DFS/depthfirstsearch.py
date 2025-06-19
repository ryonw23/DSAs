# Take in 2d array in the structure
# node1:
# node2:
# distance:
# return shortest distance from start to end
def node_count(arr1, arr2):
    max_val = arr1[0]
    for i in range(len(arr1)):
        if arr1[i] > max_val:
            max_val = arr1[i]
    print("New max:", max_val)
    for i in range(len(arr2)):
        if arr2[i] > max_val:
            max_val = arr2[i]
    print("Final max:", max_val)
    return max_val

def link(start, end, graph, visited=None):
    if visited is None:
        visited = set()

    if start == end:
        return 0

    visited.add(start)
    shortest = float('inf')

    for i in range(len(graph[start])):
        if graph[start][i] != 0 and i not in visited:
            dist = graph[start][i]
            result = link(i, end, graph, visited.copy())
            if result is not False and isinstance(result, (int, float)) and result != float('inf'):
                shortest = min(shortest, dist + result)
                print(f"Path found: {start} → {i} → {end} = {dist} + {result} = {shortest}")

    if shortest == float('inf'):
        return False
    return shortest

def dfs(node1arr, node2arr, distarr):
    highest = node_count(node1arr, node2arr)
    size = highest + 1
    graph = [[0 for _ in range(size)] for _ in range(size)]

    for i in range(len(node1arr)):
        from_node = node1arr[i]
        to_node = node2arr[i]
        dist = distarr[i]
        graph[from_node][to_node] = dist

    shortest = link(1, highest, graph)
    print(f"Shortest distance from 1 to {highest}:", shortest)
    return shortest

input_string = input("Enter from array (comma or space separated): ")
arr_from = [int(x) for x in input_string.replace(',', ' ').split()]

input_string = input("Enter to array (comma or space separated): ")
arr_to = [int(x) for x in input_string.replace(',', ' ').split()]

input_string = input("Enter dist array (comma or space separated): ")
arr_dist = [int(x) for x in input_string.replace(',', ' ').split()]

print("Result:", dfs(arr_from, arr_to, arr_dist))
