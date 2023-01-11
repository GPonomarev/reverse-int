module.exports = function reverse(n) {
    const firstDigit = Math.abs(n % 10);
    const secondDigit = (Math.abs(n % 100) / 10) | 0;
    const thirdDigit = (Math.abs(n) / 100) | 0;
    return firstDigit * 100 + secondDigit * 10 + thirdDigit;
};
