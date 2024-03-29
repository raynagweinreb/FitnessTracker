const express=  require('express')
const mongoose = require('mongoose')
const morgan = require ('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  ).then(()=> console.log('connected'));
app.use(require('./controllers/homeRoutes'))
app.use(require('./controllers/api/workoutRoutes'))
app.listen(PORT,function(){
    console.log(`App listening on Port ${PORT}`)
});