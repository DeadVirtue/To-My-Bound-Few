  <!-- learning basic js -->
  # 🚀 JavaScript Fundamentals Master Notes
  *Based on the SuperSimpleDev JavaScript Full Course (Lessons 1-7: Up to Functions)*

  ---

  ## 1. JavaScript Basics & Code Setup

  JavaScript is a programming language used to give instructions to a computer, primarily to make web pages interactive and dynamic.

  ### How Code Runs
  * **Top-to-Bottom Execution**: The computer reads and executes your code sequentially, one line at a time, from top to bottom.
  * **Semicolons**: Every complete instruction (called a statement) should end with a semicolon `;`. This acts like a period at the end of a sentence.
  * **Syntax**: This refers to the exact grammar rules of a programming language. If you make a minor syntax mistake (like forgetting a closing parenthesis), the browser cannot understand your code, and the script will crash.

  ### Basic Commands & Comments
  * **The Alert Pop-up**:
    ```javascript
    alert('Hello'); 
    ```
    This creates a modal browser pop-up window displaying the text inside the quotes. It temporarily pauses the code execution until the user clicks "OK".
  * **Code Comments**:
    ```javascript
    // This is a single-line comment. The computer ignores this completely.
    ```
    Comments are notes written for human developers to explain what the code does.

  ---

  ## 2. Numbers and Math Operations

  JavaScript handles math natively using arithmetic symbols called **operators**.

  ### Arithmetic Operators
  * `+` (Addition)
  * `-` (Subtraction)
  * `*` (Multiplication)
  * `/` (Division)

  ### Order of Operations (PEMDAS/BODMAS)
  JavaScript follows standard mathematical rules for calculating results:
  1. **Parentheses `()`** have the highest priority.
  2. **Multiplication `*` and Division `/`** happen next, from left to right.
  3. **Addition `+` and Subtraction `-`** happen last, from left to right.

  *Example of forcing priority using parentheses:*
  ```javascript
  // Multiplication happens first. Result: 2 + 12 = 14
  2 + 3 * 4; 

  // Parentheses happen first. Result: 5 * 4 = 20
  (2 + 3) * 4; 
  ```

  ### Floating Point (Decimal) Issues
  Computers store numbers as binary math (0s and 1s). Because of this, certain decimal calculations result in tiny inaccuracies.
  * *Example:* `0.1 + 0.2` outputs `0.30000000000000004` instead of exactly `0.3`.

  ### 💡 Best Practice for Money Calculations
  To completely avoid floating-point math errors when handling currency, **always calculate money in cents first** (multiply by 100), do the math using whole integers, and then divide the final result by 100 at the very end.

  ### Useful Math Functions
  * `Math.round(2.6);` — Rounds to the nearest whole integer (Outputs: `3`).
  * `Math.floor(2.6);` — Forces the number to round down (Outputs: `2`).
  * `Math.ceil(2.1);` — Forces the number to round up (Outputs: `3`).

  ---

  ## 3. Working with Strings (Text)

  A string represents text data in JavaScript. Strings must always be wrapped inside quotation marks, otherwise, JavaScript thinks the text is a variable name.

  ### Three Ways to Create a String
  1. **Single Quotes (`'...'`)**: The standard approach for basic text strings.
    ```javascript
    'Hello World'
    ```
  2. **Double Quotes (`"..."`)**: Extremely helpful if your string contains an internal apostrophe or single quote, so you don't break the string layout.
    ```javascript
    "I'm learning JavaScript"
    ```
  3. **Backticks (`` `...` ``)**: Also called **Template Literals**. These are the most advanced and flexible strings because they allow you to write multi-line strings easily and inject variables or math calculations directly into the text using `${}` syntax.
    ```javascript
    `Items count: ${2 + 3}` // Outputs: Items count: 5
    ```

  ### String Operations
  * **Concatenation (Joining Text)**: You can use the `+` operator to squish multiple strings together into one continuous line.
    ```javascript
    'Web' + 'Dev'; // Outputs: 'WebDev'
    'Hello ' + 'User'; // Outputs: 'Hello User' (Note the manual space added)
    ```
  * **Escape Characters (`\`)**: If you must use single quotes inside a single-quoted string, place a backslash `\` directly before the character to tell JavaScript it is a literal text character, not the end of the string.
    ```javascript
    'I\'m coding'; // Outputs: I'm coding
    ```
  * **Type Coercion**: If you attempt to add a string and a number together, JavaScript will automatically convert the number into a string and concatenate them together.
    ```javascript
    'Total: $' + 5; // Outputs the string: 'Total: $5'
    ```

  ---

  ## 4. Variables (`let` and `const`)

  Variables act like labeled storage containers or boxes. They allow you to store data values inside a named reference so you can reuse them throughout your program.

  ### Key Lifecycle Steps
  1. **Declaration**: Creating the variable container.
  2. **Assignment**: Putting a value inside the container using the single equals sign `=` (the assignment operator).

  ### `let` vs `const`
  * **`let`**: Used for values that you plan to change or reassign later.
    ```javascript
    let score = 0;
    score = 5; // Valid. The box value is updated to 5.
    ```
  * **`const` (Constant)**: Used for values that should *never* change after assignment. Attempting to reassign a `const` throws an error. **Always default to using `const`** unless you explicitly know the value needs to change later.
    ```javascript
    const pi = 3.14;
    pi = 5; // ERROR! Code breaks.
    ```

  ---

  ## 5. Booleans & Comparison Operators

  A Boolean is a fundamental data type that can only hold one of two specific values: `true` or `false`. They control the logical decision-making paths of your application.

  ### Comparison Operators
  These symbols compare two values and resolve down to a Boolean value (`true` or `false`):
  * `>` (Greater than)
  * `<` (Less than)
  * `>=` (Greater than or equal to)
  * `<=` (Less than or equal to)
  * `===` (**Strict Equality**): Checks if both the value *and* the underlying data type match exactly. **Always use this operator.**
  * `!==` (**Strict Inequality**): Checks if two values are not exactly equal.

  ```javascript
  5 > 3; // Evaluates to: true
  5 === '5'; // Evaluates to: false (Number vs String data type mismatch)
  ```

  ---

  ## 6. If-Statements & Control Flow

  If-statements look at a condition. If that condition evaluates to `true`, the browser executes the specific block of code trapped inside the curly braces.

  ### Structural Blueprint
  ```javascript
  if (condition1) {
    // This block runs if condition1 evaluates to true
  } else if (condition2) {
    // This block runs if condition1 was false AND condition2 evaluates to true
  } else {
    // This fallback block runs if ALL of the above conditions were false
  }
  ```

  ### Understanding Code Scope
  * A **block** is the code enclosed between opening and closing curly braces `{ }`.
  * Variables declared with `let` or `const` inside a block are locked inside that specific block. They cannot be seen, accessed, or modified by any code outside of those braces. This is known as **Block Scope**.

  ---

  ## 7. Logical Operators

  Logical operators allow you to join multiple Boolean conditions together to make complex decisions.

  * **`&&` (Logical AND)**: Returns `true` only if **both the left side and the right side** evaluate to true. If either side is false, the entire thing becomes false.
    ```javascript
    5 > 3 && 2 > 4; // true && false -> Evaluates to: false
    ```
  * **`||` (Logical OR)**: Returns `true` if **at least one side** evaluates to true. It only returns false if both sides are completely false.
    ```javascript
    5 > 3 || 2 > 4; // true || false -> Evaluates to: true
    ```
  * **`!` (Logical NOT)**: Inverts the Boolean value. It turns `true` into `false`, and `false` into `true`.
    ```javascript
    !true; // Evaluates to: false
    ```

  ---

  ## 8. Truthy and Falsy Values

  When you pass a non-Boolean value (like a number or string) directly into an `if` statement condition, JavaScript automatically tries to convert it into a Boolean. 

  ### Falsy Values
  There are exactly **6 values** in JavaScript that convert to `false`:
  1. `false`
  2. `0` (The number zero)
  3. `''` or `""` (An empty string containing zero characters)
  4. `NaN` (Not a Number)
  5. `undefined` (A variable that has been declared but not given a value yet)
  6. `null` (An intentional empty value)

  ### Truthy Values
  **Everything else** in JavaScript is considered truthy. This includes:
  * Negative numbers (e.g., `-5`)
  * Strings containing just spaces (e.g., `' '`)
  * Text strings of the word false (e.g., `'false'`)

  ---

  ## 9. Advanced Coding Shortcuts

  These shortcuts act as clean, compact alternatives to long, multi-line `if-else` blocks.

  ### The Ternary Operator (`? :`)
  A compact way to write a simple, one-line if-else assignment statement.
  * **Syntax**: `condition ? value_if_true : value_if_false;`
  * *Example:*
    ```javascript
    let result = 5 > 3 ? 'Yes' : 'No'; 
    // result is assigned 'Yes' because 5 is greater than 3.
    ```

  ### The Guard Operator (`&&`)
