# Part1.md 
## Rui Cai A16143212

### 1. 
The current value of `i` (prices.length - 1) would be logged in console (displayed in console) since `i` is a var and it ignores scope.
<br>

### 2. 
The current value of `discountePrice` would be printed / logged into console and it's a var and it ignores scope.
<br>

### 3. 
The current value of `finalPrice` is logged / printed, since finalPrice is a var defined in the same scope of line 13.
<br>

### 4. 
[50, 100, 150] would be returned since this function basically takes every price in `prices` and calculate its `finalPrice` based on `discount` and push `discount` into `dicounted`. So at the end, `discounted` would have all discounted prices in it.
<br>

### 5. 
Error, since `i` is a let defined in a for loop, so we cannot access it outside of the for loop.
<br>

### 6. 
Error, since `discountedPrice` is a let defined in a for loop, so we cannot access it outside of the for loop.
<br>

### 7. 
The current value of `finalPrice` is logged / printed, since finalPrice is a let defined in the same scope of line 13.
<br>

### 8. 
[50, 100, 150] would be returned since this function basically takes every price in `prices` and calculate its `finalPrice` based on `discount` and push `discount` into `dicounted`. So at the end, `discounted` would have all discounted prices in it.
<br>

### 9. 
Error, since `i` is a let defined in a for loop, so we cannot access it outside of the for loop.
<br>

### 10. 
Error, since `discountedPrice` is a const defined in a for loop, so we cannot access it outside of the for loop.
<br>

### 11. 
0 would be printed, since `finalPrice` is a const defined with a value of 0, so its value won't change.
<br>

### 12. 
[0, 0, 0] would be returned since `finalPrice` is 0 all the time, and the for loop runs 3 times.
<br>

### 13. 
- A. student.name
- B. student["Grad Year"]
- C. student["greeting"] ()
- D. student["Favorite Teacher"].name
- E. student["courseLoad"][0]
<br>

### 14.
- A. '32', since `+` performs concatenation when one of the operand is string type
- B. 1, since `-` converts '3' to number 3
- C. 3, since `+` converts null to 0
- D. '3null', since `+` performs concatenation when one of the operand is string type
- E. 4, since `+` converts true to number 1
- F. 0, since both `false` and `null` are converted to number 0 by `+`
- G. '3undefined', since `+` performs concatenation when one of the operand is string type
- H. NaN, since `-` converts `3` to number 3, and `undefined` to Nan, but 3 - NaN gives NaN.
<br>

### 15.
- A. true, since `>` converts '2' to number 2
- B. false, since both operand are strings, here we're doing string comparison. In lexicographic order '2' is greater than '12'
- C. true, since `==` converts '2' to number 2
- D. false, since `===` is strict comparison, and '2' is a different type from number 2
- E. false, since `true` is converted to number 1
- F. true, since `Boolean(2)` converts 2 to true
<br>

### 16. 
`==` tends to convert its operand to different types to do comparison, while `===` is strict comparison so it doesn't do any conversion: if its operands have different types, false is returned immediately. 
<br>

### 17.
'How are you?' gets printed since `2 == true` evaluates to false, while number 2 is treated as true.
<br>

### 18.
see file part1-question18.js
<br>

### 19.
The result would be [6, 8, 10]. Since we entered a for loop, and in the for loop, we call `doSomething(array[i], function(x) { return x * 2;})`, and this would give us `(array[i] + 2) * 2` in each loop. So the final result is [6, 8, 10].
<br>

### 20.
see file part1-question20.js
<br>

### 21.
1 4 3 2, since both 3 and 2 are delayed, but 3 is delayed 0 ms while 2 is delayed 1000ms. There is still some delay to 3 though, so 4 would be printed before 3. 




