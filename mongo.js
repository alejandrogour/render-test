const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://agomezurrea:${password}@cluster0.zioo5sb.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true
  },
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const notes = [
  new Note({ content: 'HTML is easy', important: true }),
  new Note({ content: 'CSS is fun', important: false }),
  new Note({ content: 'JavaScript is powerful', important: true })
]

Promise.all(notes.map(note => note.save()))
  .then(() => {
    Note.find({}).then(result => {
      result.forEach(note => console.log(note))
      mongoose.connection.close()
    })
  })
  .catch(err => {
    console.error(err)
    mongoose.connection.close()
  })



/*
note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/