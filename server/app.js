const express = require('express');
const app = express();
app.use(express.json());

const Recipelist = require('./utils/seedrecipe')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Cateringservice')
.then(()=>{
    console.log('connected to mongodb');
    Recipelist();
}
)
.catch(err=>console.error('failed to connect to mongodb',err))

const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true  }));

const recipe = require('./routes/recipe');
app.use('/recipe',recipe)

const user = require('./routes/user');
app.use('/user' ,user)

const path = require('path');
app.use(express.static('public'))
const port = 5001;
app.listen(port,console.log(`app is listening at port ${port}`))