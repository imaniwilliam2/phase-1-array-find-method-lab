function superbowlWin(record){
   const win = record.find( winner => winner.result === 'W')
   if (win) {
    return win.year
   } else {
    return undefined
   }
}
const record = [
    {year: "2015", result: "L"},
    {year: "2016", result: "L"},
    {year: "2017", result:"N/A"},
    {year: "2019", result: "W"}
]