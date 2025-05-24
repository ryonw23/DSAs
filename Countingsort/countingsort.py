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

def bucket_sort(arr): #Will generally only work when values are evenly distributed and not clumped, else infinite recursion. Can be solved with introducing sorting algo instead of recursion
    n = len(arr)
    if(len(arr) <= 1):
        return arr
    
    max = find_max(arr)
    buckets = []
    sorted = []
    for i in range(n):
        buckets.append([])
    for i in range(n):
        buckets[math.floor(arr[i]*n/(max+1))].append(arr[i])
    
    print("Buckets:", buckets)
    for i in range(n):
        if(len(buckets[i]) > 1 and len(buckets[i]) < len(arr)):
            sorted += bucket_sort(buckets[i])
        else:
            sorted += buckets[i]
    return sorted

input_string = input("Enter array (comma or space separated): ")
arr = [int(x) for x in input_string.replace(","," ").split()]
print("Original array: ", arr)
print("Sorted array: ", bucket_sort(arr))
