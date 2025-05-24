import math

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

def radix_sort(arr):
    digits = len(str(find_max(arr)))
    print("Count of digits in longest number: ", digits)

    for i in range(digits):
        dig_arr = []
        queues = []
        for j in range(10):
            queues.append([])
        
        for j in range(len(arr)):
            digit = math.floor((arr[j]/(10 ** i)) % 10)
            dig_arr.append(digit)
            queues[digit].append(arr[j])
        
        sorted_digs = counting_sort(dig_arr)
        print("Queues of digits:", queues)
        print("Array of digits in", i, "th place:", dig_arr, "Sorted:", sorted_digs)

        index = 0
        for j in range(len(sorted_digs)):
            digit = sorted_digs[j]
            arr[index] = queues[digit].pop(0)
            index += 1
    return arr


input_string = input("Enter array (comma or space separated): ")
arr = [int(x) for x in input_string.replace(","," ").split()]
print("Original array: ", arr)
radix_sort(arr)
print("Sorted array: ", arr)
