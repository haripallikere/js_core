/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
    function numToStr (n) {
        var num = String(n);
        return(num);       
     }


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
    function addToNum (n) {
        var num = n + 1;
        return(num);
    }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
    function subNum (n) {
        var num = n-1;
        return(num);
    }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
    function addTwoNum (a,b) {
        var num = a +b;
        return(num);
    }

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
    function subFromFirst (a,b) {
        var num = a - b;
        return(num);
    }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
    function mulTwoNum (a,b) {
        var num = a * b;
        return(num);
    }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
    function divide (a,b) {
        var num = a / b;
        return(num);
    } 

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
    function mulBySelf (n) {
        var num = n * n;
        return(num);
    } 

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
    function matOppo (operation,a,b) {
        if (operation == "add") {
            var add = a+b;
            return(add);
        }
        else if (operation == "sub"){
            var sub = a-b;
            return(sub);
        }
        else if (operation == "mul") {
            var mul = a * b;
            return(mul);
        }
        else if (operation == "div") {
            var div = a/b;
            return(div);
        }
    }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
    function trueFalse (a,b) {
        if (a>b) {
            return true;
        }
        else {}
    }

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
        function trueFalse (a,b) {
            if (a<b) {
                return false;
            }
            else {}
        }


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
        function trueFalse (a,b) {
            if (a === b) {
                return true;
            }
            else {}
        }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
        function smallInteger (a,b) {
            if ()
        }

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
