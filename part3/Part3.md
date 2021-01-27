# Part3.md

### What was the bug?
The bug is that `num1` and `num2` are strings instead of numbers, so when we add them together using `+`, they are concatenated to give `result = '12'`
<br>

### Ho would you fix it?
Change `let result = num1 + num2` to `let result = Number(num1) + Number(num2)`