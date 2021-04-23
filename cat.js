const fs = require('fs')
// const filePath = process.stdin.on('data', (data) => {
//     //const cmd = data.toString().trim();
//      process.stdout.write(__dirname);
// })

module.exports = function(fileName) {
   fs.readFile((__dirname + '/' + fileName), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
    console.log(data) 
})
}


// const filePath = pwd()
// console.log(filePath)



