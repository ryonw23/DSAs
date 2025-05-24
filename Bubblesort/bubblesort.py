def swap(arr,a,b):
    store = arr[a]
    arr[a] = arr[b]
    arr[b] = store

def bubble_sort(arr):
    swapped = True
    length = len(arr) - 1
    while(swapped):
        swapped = False
        for i in range(length):
            if(arr[i]>arr[i+1]):
                swap(arr,i,i+1)
                swapped = True
                print(arr)
        length -= 1

input_string = input("Enter array (comma or space separated): ")

arr = [int(x) for x in input_string.replace(',', ' ').split()]

print("Original array:", arr)

bubble_sort(arr)

print("Sorted array:", arr)
