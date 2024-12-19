function sortAlgo(){
    let numberInput = prompt("Enter numbers, follow this format (e.g., 42, 25, 12, 63, 48, 10, 16, 5, 30, 78:");
    let numbers = numberInput.split(",").map(num => parseInt(num.trim())); 

    function bubbleSort(arr) {
        let n = arr.length;
        let comparisons = 0; 
        alert("Bubble Sort Process:");
    
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                alert(`Comparing ${arr[j]} and ${arr[j + 1]}`);
                if (arr[j] > arr[j + 1]) {
                    //swapppping
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    alert(`Swapped: ${arr}`);
                }
            }
        }
    
        alert(`Total Comparisons: ${comparisons}`);
        return arr;
    }
    
    prompt("Original Array:", numbers);
    
    const sortedArray = bubbleSort(numbers);
    
    alert("Sorted Array:");
    sortedArray.forEach((num) => prompt(num));
    }


