import math

def merge(arr,low,mid,high):
    l = arr[low:mid+1]
    r = arr[mid+1:high+1]
    print("left arr: ", l, "right arr: ", r)
    i = 0
    j = 0
    index = low
    
    while(i < len(l) and j < len(r)):
        if(l[i] <= r[j]):
            arr[index] = l[i]
            i+=1
        else:
            arr[index] = r[j]
            j+=1
        index+=1
    
    while(i < len(l)):
        arr[index] = l[i]
        i+=1
        index+=1
    
    while(j < len(r)):
        arr[index] = r[j]
        j+=1
        index+=1
    
    print("current array state: ", arr)

def merge_sort(arr,low,high):
    if(low < high):
        mid = math.floor((low+high)/2)
        merge_sort(arr,low,mid)
        merge_sort(arr,mid+1,high)
        merge(arr,low,mid,high)
    
input_string = input("Enter array (comma or space separated): ")

arr = [int(x) for x in input_string.replace(","," ").split()]
       
print("Original array: ", arr)

merge_sort(arr,0,len(arr))

print("Sorted array: ", arr)
