const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env vars
dotenv.config({path: './config/config.env'});

//load models
const Bootcamp = require('./models/Bootcamp');

//connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read the JSON files
const bootcamps =JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

//Import into db
const importData =async () => {
    try {
        await Bootcamp.create(bootcamps);

        console.log('DATA IMPORTED!!!!!!!!');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

//Delete the data
const deleteData =async () => {
    try {
        await Bootcamp.deleteMany();

        console.log('DATA DISTORYED!!!!!!!!');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if(process.argv[2] === '-i'){
   importData();
} else if(process.argv[2] === '-d'){
   deleteData();
}