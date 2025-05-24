def find_max(arr):
    max = arr[0]    
    for i in range(len(arr)):
        if(arr[i]>max):
            max = arr[i]
    return max

def counting_sort(arr):
    max = find_max(arr)
    count = [0] * (max+1)
    sorted = [0] * len(arr)
    pos = 0

    for i in range(len(arr)):
        count[arr[i]] += 1
    print("Count array: ", count)
    
    for i in range(max+1):
        for j in range(pos,pos+count[i]):
            sorted[j] = i
        pos += count[i]
    return sorted

input_string = input("Enter array (comma or space separated): ")
arr = [int(x) for x in input_string.replace(","," ").split()]
print("Original array: ", arr)
print("Sorted array: ", counting_sort(arr))
