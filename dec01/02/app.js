let fs = require("fs")

let tally = 0
let previousNumber = 0
let array = []
let valueOfEachThreeArray = []
let puzzleArrayCurrentValue = 0
let firstTime = true
let sum = 0

const name = "Simon"

startTimeStamp()
readPuzzleInput()
calculatePuzzle()
outputResult()
endTimeStamp()

function startTimeStamp() {
  timeStamp = Date.now()
  dateTime = new Date(timeStamp)
  console.log(`OK ${name}, let's win some stars!`)
  console.log(`Start date/time: ` + dateTimeToString(dateTime))
}

function endTimeStamp() {
  timeStamp = Date.now()
  dateTime = new Date(timeStamp)
  console.log(`End date/time: ` + dateTimeToString(dateTime))
}

function dateTimeToString(dateTime) {
  return (
    dateTime.getDate() +
    "/" +
    dateTime.getMonth() +
    "/" +
    dateTime.getFullYear() +
    " " +
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds() +
    "." +
    dateTime.getMilliseconds()
  )
}

function readPuzzleInput() {
  array = fs.readFileSync("./resources/puzzleInput.txt").toString().split("\n")
}

function getValueOfEachSetOfThree() {
  for (i in array) {
    sum = 0
    for (let x = 0; x < 3; x++) {
      sum = sum + parseInt(array[parseInt(i) + parseInt(x)])
    }
    valueOfEachThreeArray.push(sum)
  }
}

function calculatePuzzle() {
  getValueOfEachSetOfThree()
  for (i in valueOfEachThreeArray) {
    puzzleArrayCurrentValue = parseInt(valueOfEachThreeArray[i])

    if (firstTime) {
      firstTime = false
    } else {
      if (puzzleArrayCurrentValue > previousNumber) {
        tally = tally + 1
      }
    }
    previousNumber = puzzleArrayCurrentValue
  }
}

function outputResult() {
  console.log(`Result = ` + tally)
}
