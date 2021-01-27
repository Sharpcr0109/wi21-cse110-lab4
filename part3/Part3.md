# Part3.md

### What was the bug?
The bug is that `num1` and `num2` are strings instead of numbers, so when we add them together using `+`, they are concatenated to give `result = '12'`
<br>

### Ho would you fix it?
Change `let result = num1 + num2` to `let result = Number(num1) + Number(num2)`
<br>

### 1. What is the name of the new json file?
`citylots.json`
<br>

### 2. Which file initiated the download of the new file?
`part2.js`
<br>

### 3. What is its file size?
11.7 MB
<br>

### 4. How long did it take to download?
68ms

### 5. What was your User-Agent for the browser that made the request?
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
<br>

### 6. In the response, what type of server did it come from?
Apache
<br>

### 7. When was the file last modified?
Tue, 26 Jan 2021 22:14:13 GMT
<br>

### 8. What was the Content-Type of the file?
application/json
<br>

### 9. Which method inside the initiating file made the request?
fetchData @part2.js:2

onclick   @(index):21

