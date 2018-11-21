const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Get the character at the position

console.log(escola.charCodeAt(3)) // It returns the ascii value of the paramter

console.log(escola.indexOf(3)) // Returns the position of an element from string

console.log(escola.substring(1)) // It returns the value from position 1 to the end

console.log(escola.substring(0, 3)) // It function reuturns a value between 0 and 3

console.log("Escola ".concat(escola).concat("!"))

console.log(escola.replace(3, "e")) // It returns the value replaced, the first paramter is the value to find and the second is the value that going to be placed

console.log(escola.replace(/\d/g, "e")) // Using regex to find the value

console.log("Ana, Maria, Pedro".split(',')) // Return an array breaking at an element, in this code was used "," to break
