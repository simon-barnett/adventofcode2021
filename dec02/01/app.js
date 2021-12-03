let fs = require("fs")

let tally = 0
let array = []
let vertical = 0
let horozontal = 0
let line = []

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

function calculatePuzzle() {
  for (i in array) {
    line = array[i].split(" ")
    if (line[0] === "forward") {
      horozontal = horozontal + parseInt(line[1])
    }
    if (line[0] === "down") {
      vertical = vertical + parseInt(line[1])
    }
    if (line[0] === "up") {
      vertical = vertical - parseInt(line[1])
    } else {
    }
    tally = horozontal * vertical
  }
}

function outputResult() {
  console.log(`Result = ` + tally)
}
