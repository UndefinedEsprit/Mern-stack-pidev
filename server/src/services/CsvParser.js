
'use strict';
const User = require("../models/user");
const mongoose = require("mongoose");
const csv = require('csv');
const parser = csv.parse({
    columns: true
});

const fs = require('fs');
const path = require('path');

const creaturesFilePath = path.join(__dirname, '..', 'resources', 'creatures.csv');
const creaturesFileReadStream = fs.createReadStream(creaturesFilePath);

const stream = require('stream');

const stringifyStream = new stream.Transform({
    objectMode: true,
    transform(data, encoding, callback) {
        console.log(data.name);
        this.push(JSON.stringify(data) + '\n');
        callback();
    }
});

const consoleSinkWritable = new stream.Writable({
    objectMode: true,
    write: function(chunk, encoding, next) {
        console.log(chunk);
        let model = new User(chunk);
        model._id = mongoose.Types.ObjectId();
        const user = model.save();
        next();
    }
});
const CsvParserService=()=>{
    creaturesFileReadStream
    .pipe(parser)	  
    .pipe(consoleSinkWritable); 

}

    module.exports = CsvParserService;
