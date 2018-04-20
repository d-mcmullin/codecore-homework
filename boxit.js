let myArgs = process.argv.slice(2);

console.log(maxNameLength(myArgs));

function maxNameLength(names) {
    let maxLength = 0
     names.forEach (function(name){
        if (maxLength < name.length) {
            maxLength = name.length
        }
     })
     return maxLength;
}

let maxLength = maxNameLength(myArgs);

//for loop to loop through names.....maybe????


// let myArray = myArgs
//     for (let i = 0; i < myArray.length; myArray++) {
//         return(myArray);
//     }
//checking whether middle or bottom line is drawn
// function nameChecker(myArgs) {
//     myArgs.forEach (function(name) {
//         if (myArgs.length === maxLength) {
//             console.log(drawBottomLine)
//         } else console.log(drawMiddleLine);

//     }
// };
// // console.log(`${myArray[i]} + \n);

// myArgs[0] + /n

//USE .forEach




function drawLine(maxLength) {
 let string = '━' 
 return string.repeat(maxLength);
}

// console.log(`┏${drawTopLine(maxLength)}┓
// ┃${myArgs}┃`);

function drawTopLine(maxLength) {
    return `┏${drawLine(maxLength)}┓\n`;
}

function boxSingleName(name, boxLength){
    let str = [
        drawTopLine(boxLength),
        drawNameLine(name, boxLength),
        drawBottomLine(boxLength)
    ].join('\n')
}

console.log(boxSingleName(myArgs.forEach, maxLength));

// drawTopLine(maxLength);


function drawMiddleLine(maxLength) {
    return '┣' + drawLine(maxLength) + '┫\n';
}

// console.log('┣' + drawMiddleLine(maxLength) + '┫');

// drawMiddleLine(maxLength);

function drawBottomLine(maxLength) {
    return '┗' + drawLine(maxLength) + '┛';
}

// console.log('┗' + drawBottomLine(maxLength) + '┛');

// drawBottomLine(maxLength);

function drawNameLine(name, maxLength) {
    return `┃${name}${' '.repeat(maxLength - name.length)}┃\n`
}

function drawNameLineHO(maxLength) {
    return function(name) {
        return `┃${name}${' '.repeat(maxLength - name.length)}┃\n`
    }
}

function drawNames(namesArr) {
    let max = maxNameLength(namesArr)
    return namesArr.map((name)=> {
        return drawNameLine(name, max)
    }).join(drawMiddleLine(max))
}


console.log(`${drawTopLine(maxLength)}${drawNames(myArgs)}${drawBottomLine(maxLength)}`)

// myArgs.forEach() // returns undefined

// func [value] -> (element, index, array) => { return someValue }
// function(elememt) { return element.toString() }
// myArgs.map(drawNameLine) // returns a new array


