/* BOX
Write a program box.html that asks the user to input width and height and prints a solid rectangular 
box of the requested size using asterisks. Also, print a line Shape: between user input and the 
printed shape (to separate input from output).
Example:
Input width: 7
Input height: 4
Shape:
*******
*******
*******
*******
*/
function taskA(){
    var width = prompt("Enter width:");
    var height = prompt("Enter height:");
    for(let i = 0; i < height; i++){
        var str = "";
        for(let k = 0; k < width; k++){
            str += '*';
        }
        console.log(str);
    }
}

/* CHECKERBOARD
Write a program checkerboard.html that asks the user to input width and height and prints a 
rectangular checkerboard of the requested size using asterisks and spaces (alternating).
Example:
Input width: 11
Input height: 6
Shape:
* * * * * *
 * * * * *
* * * * * *
 * * * * *
* * * * * *
 * * * * *
*/
function taskB(){
    var width = prompt("Enter width:");
    var height = prompt("Enter height:");
    for(let i = 0; i < height; i++){
        var str = "";
        for(let k = 0; k < width; k++){
            if((i % 2 === 1 && k % 2 === 1) || (i % 2 === 0 && k % 2 === 0)){
                str += '*';
            }else{
                str += ' ';
            }
        }
        console.log(str);
    }
}

/* CROSS
Write a program cross.html that asks the user to input the shape size, and prints a diagonal cross 
of that dimension.
Example:
Input size: 8
Shape:
*      *
 *    *
  *  *
   **
   **
  *  *
 *    *
*      *
*/
function taskC(){
    var size = prompt("Enter size:");
    for(let i = 0; i < size; i++){
        var str = '';
        for(let k = 0; k < size; k++){
            if(k === i || k === size-i-1){
                str += '*';
            }else{
                str += '.';
            }
        }
        console.log(str);
    }
}

/* LOWER TRIANGLE
Write a program lower.html that prints the bottom-left half of a square, given the side length.
Example:
Input side length: 6
Shape:
*
**
***
****
*****
******
*/
function taskD(){
    var length = prompt("Enter length:");
    var str = '';
    for(let i = 0; i < length; i++){
        str += '*';
        console.log(str);
    }
}

/* UPPER TRIANGLE
Write a program upper.html that prints the top-right half of a square, given the side length.
Example:
Input side length: 5
Shape:
*****
 ****
  ***
   **
    *
*/
function taskE(){
    var length = prompt("Enter length:");
    for(let i = 0; i < length; i++){
        var str = '';
        for(let k = 0; k < i; k++){
            str += ' ';
        }        
        for(let k = i; k < length; k++){
            str += '*';
        }
        console.log(str);
    }
}

/* UPSIDE-DOWN TRAPEZOID
Write a program trapezoid.html that prints an upside-down trapezoid of given
width and height.

However, if the input height is impossibly large for the given width, then the
program should report, Impossible shape!
Example 1:
Input width: 12
Input height: 5
Shape:
************
 **********
  ********
   ******
    ****

Example 2:
Input width: 12
Input height: 7
Impossible shape!
*/
function taskF(){
    var width = prompt("Enter width:");
    var height = prompt("Enter height:");
    if(height * 2 > width){
        console.log('Impossible shape!');
        return;
    }
    var spaces = 0;
    var stars = width;
    for(let i = 0; i < height; i++){
        var str = '';
        for(let k = 0; k < spaces; k++){
            str += ' ';
        }        
        for(let k = 0; k < stars; k++){
            str += '*';
        }
        spaces++;
        stars -= 2;
        console.log(str);
    }
}