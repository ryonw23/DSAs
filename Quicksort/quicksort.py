def swap(arr,a,b):
    store = arr[a]
    arr[a] = arr[b]
    arr[b] = store

def partition(arr,low,high):
    pivot = arr[high] #Can be low, mid or high --> if mid then, mid = Math.floor((high+low)/2)
    pivotPos = high
    index = low-1
    
    for i in range(low,high):
        if(arr[i] <= pivot):
            print(arr[i], " is less than", pivot)
            index += 1
            swap(arr,i,index)
            print("Place smaller than pivot to left: ", arr)
            print("Pivot pos: ", pivotPos)
            
    store = arr[index+1]
    arr[index+1] = arr[pivotPos]
    arr[pivotPos] = store
    print("Place pivot in position: ", arr)
    print("Pivot pos: ", index+1)
    return index+1


def quick_sort(arr,low,high):
    if(low<high):
        pos = partition(arr,low,high)
        quick_sort(arr,low,pos-1)
        quick_sort(arr,pos+1,high)
    
input_string = input("Enter array (comma or space separated): ")

arr = [int(x) for x in input_string.replace(',', ' ').split()]

print("Original array:", arr)

quick_sort(arr,0,len(arr)-1)

print("Sorted array:", arr)


