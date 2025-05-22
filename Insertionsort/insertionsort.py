def insertion_sort(arr):
    length = len(arr)
    for i in range(length):
        ins = arr[i]
        index = i-1
        while(index >= 0 and ins<arr[index]):
            arr[index+1] = arr[index]
            index -= 1
            print(arr)
        arr[index+1] = ins

input_string = input("Enter array (comma or space separated): ")

arr = [int(x) for x in input_string.replace(',', ' ').split()]

print("Original array:", arr)

insertion_sort(arr)

print("Sorted array:", arr)
