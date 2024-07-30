function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }

        charIndexMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log("The length of the longest substring without repeating characters is:", maxLength);
    return maxLength;
}

// Example usage:
lengthOfLongestSubstring("abcabcbb");  // Output: 3
lengthOfLongestSubstring("bbbbb");     // Output: 1
lengthOfLongestSubstring("pwwkew");    // Output: 3
lengthOfLongestSubstring("");          // Output: 0
lengthOfLongestSubstring("abcdefg");   // Output: 7