def swap(arr,a,b):
    store = arr[a]
    arr[a] = arr[b]
    arr[b] = store

def min_pos(arr,start,end):
    min = arr[start]
    pos = start
    for i in range(start,end+1):
        if(arr[i]<min):
            min = arr[i]
            pos = i
    return pos

def selection_sort(arr):
    length = len(arr)-1
    for i in range(length):
        pos_min = min_pos(arr,i,length)
        swap(arr,pos_min,i)
        print(arr)
    
input_string = input("Enter array (comma or space separated): ")

arr = [int(x) for x in input_string.replace(',', ' ').split()]

print("Original array:", arr)

selection_sort(arr)

print("Sorted array:", arr)
