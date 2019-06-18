const fs = require('fs')

var content = fs.readFileSync('data.json').toString()
var jsonFi = JSON.parse(content)
// console.log(jsonFi)




function help() {
    // node main.js --help
    console.log('node main.js --help \t\t\t\t\t for help')
    console.log('node main.js list \t\t\t\t\t to show the list of todos')
    console.log('node main.js add --title your_title --body todo_body \t to add a todo note')
    console.log('node main.js read --title your_title \t\t\t to read a todo note')
    console.log('node main.js remove --title your_title \t\t\t to remove a todo note')
}


function list() {
    for (el of jsonFi) {
        console.log(`\nTitle: ${el.Title}`)
        console.log(`Body: ${el.Body}\n`)
    }
}


function add() {
    var newItem={Title:"", Body:""}
    if ((process.argv[3] === "--title")&(process.argv[5]=== "--body")) {
        if (typeof process.argv[4] === undefined) {
           console.log("you haven't enter a title")
        } else {
            newItem.Title= process.argv[4]
        }
        if (typeof process.argv[6] === undefined) {
            console.log("you haven't enter a body")
        } else {
            newItem.Body= process.argv[6]
        }
    } else {
        help()  
    }
    jsonFi.push(newItem)
    fs.writeFileSync('data.json', JSON.stringify(jsonFi))
    
}

function read() { 
    if (process.argv[2] === "read") {
        if (typeof process.argv[3] == undefined) {
            console.log("you haven't enter a title")
        } else {
            jsonFi = jsonFi.filter((el) => {
               return el.Title===process.argv[3]
            })
            jsonFi.forEach(element => {
                console.log(element)
            });
        }
    } else {
        help()
    }
   
}

read()

if (process.argv[2] === "add") {
    add()
}
// console.log(typeof process.argv[2])

if (process.argv[2] === "list") {
    list()
}

// let student = {  
//     Title: "student",
//     Body: "hello"
// }

