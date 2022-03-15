const fs = require('fs')

//Reads a file
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})

//Rewrites an existing file
fs.writeFile('./docs/blog1.txt', 'hello, world', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('File was written')
})

//Creates a file
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('File was created')
})

//Creates directory
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Folder deleted')
  })
}

//Deletes files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('File was deleted')
  })
}
