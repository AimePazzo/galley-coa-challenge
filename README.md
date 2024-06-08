# Gallery Project

## Description

This project is a simple gallery application that displays a collection of images. It includes features such as image viewing, browsing through thumbnails, and navigating between images.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup Instructions

### Prerequisites

- A web browser (e.g., Google Chrome, Firefox, Safari)
- A code editor (optional, for making changes)
- Node.js and npm (for running tests)

### Running the Project

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AimePazzo/galley-coa-challenge.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd galley-coa-challenge
   ```

3. **Open the `index.html` file in your web browser:**

   ```sh
   open index.html
   ```

   Or, if you are using a code editor with live server functionality (e.g., VSCode with the Live Server extension), you can right-click on the `index.html` file and select "Open with Live Server".

## Features

- View a collection of images in a gallery layout
- Browse through thumbnails
- Navigate between images using next and previous buttons

## License

This project is licensed under the MIT License.

---

# Coding Challenge 1: Array Manipulation

## Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

## Example

Input: `arr = [4, 2, 7, 1, 9, 5]`, `target = 17`  
Output: `true`  
Explanation: The subarray `[7, 1, 9]` sums up to `17`, which is equal to the target.

## Constraints

- The array will contain between 1 and 100,000 elements.
- The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
- Expected Time Complexity: O(n), where n is the length of the array.
- Expected Space Complexity: O(1)

## Solution (JavaScript)

```javascript
function arrayMap(arr, target) {
    let currentSum = 0;
    let start = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Example usage
console.log(arrayMap([4, 2, 7, 1, 9, 5], 17)); // Output: true
```

---

# Coding Challenge 2: String Transformation

## Problem Statement

Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

## Example

Input: `"Hamburger"`  
Output: `"regrubmaH"`  
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in `"regrubmaH"`.

Input: `"Pizza"`  
Output: `"80 105 122 122 97"`  
Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in `"80 105 122 122 97"`.

Input: `"Chocolate Chip Cookie"`  
Output: `"eikooCpihCetalocohC"`  
Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in `"eikooCpihCetalocohC"`.

## Solution (JavaScript)

```javascript
function stringTransform(str) {
    const length = str.length;

    if (length % 15 === 0) {
        str = str.split("").reverse().join("");
        return str.split("").map(char => char.charCodeAt(0)).join(" ");
    } else if (length % 3 === 0) {
        return str.split("").reverse().join("");
    } else if (length % 5 === 0) {
        return str.split("").map(char => char.charCodeAt(0)).join(" ");
    }

    return str;
}

// Example usage
console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
```