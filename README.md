# learn-coding-convention

## Closure
### What is closure?
- Closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.
- Examples
```
function numberGenerator() {
  // Local free variable that ends up within the closure
  var num = 1;
  function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
```
### Distinguish between closure and data hiding
- Closure controls what is and isn't in scope in a particular function, it wrap the data members and methods into a single unit.
- Data hiding is the process of protecting the members of the class from unauthorized access
### How to apply closure to make the code easy to reuse
- We can use define a function using closure and then assign to variable for reusing
## How to write understandable code and easy to debug
- Follow conventions
- Declare and initialize your variables at the top
- Write modular functions: each function should do one clear thing, and should always provide the same output for the same input
- Recognize and remove duplicate code
- Comment your code often: comment are a great way to summarize a code fragment’s purpose, saving your fellow developers the time it would take to determine it on their own
## How to construct code functions and modules short and effective
- Function
  - Replace traditional functions with arrow aunctions and class Methods
  - We should write functions as pure functions
  - Avoid long argument list
- Module
  - Prefer named exports: Favor named module exports to benefit from renaming refactoring and code autocomplete
  - No work during import: When imported, the module shouldn't execute any heavy work. Rather, the consumer should decide when to perform runtime operations
  - Favor high cohesion modules: Favor high cohesion modules whose functions, classes, variables are closely related and perform a common task. Refactor big low cohesion modules by splitting them into multiple high cohesion ones
  - Avoid long relative paths
## How the smell code could affect the programs
Having code smells does not certainly mean that the software won’t work, it would still give an output, but it may slow down processing, increased risk of failure and errors while making the program vulnerable to bugs in the future.
## Exercise: Final Project Frontend Basic
