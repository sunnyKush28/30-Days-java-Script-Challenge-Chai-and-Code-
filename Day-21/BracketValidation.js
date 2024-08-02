function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If the character is a closing bracket
        if (char in pairs) {
            // Pop the top of the stack and check if it matches the corresponding opening bracket
            console.log(pairs[char]);
            console.log(stack);

            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were properly matched; otherwise, it's invalid
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));      // Output: true
// console.log(isValid("()[]{}"));  // Output: true
// console.log(isValid("(]"));      // Output: false
// console.log(isValid("([)]"));    // Output: false
// console.log(isValid("{[]}"));    // Output: true