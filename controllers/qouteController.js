const fs = require("fs");
const { v4: uuid } = require('uuid');
const { readFile,writeFile } = require("../utility/common");

exports.fetchQoutes = async (req, res) => {
    try {
        //fetch qoutes from file 
        var qoutes = await readFile(`${__dirname}/../data/qoutes.json`,'utf-8')
        console.log(qoutes) 
        //send back qoutes in response
        res.status(200).json({
           status: "ssucces",
           data: {
               qoutes
           }
        })
      
    } catch (error) {
        console.log(error)
    }
}
exports.addQoute = async (req, res) => {
    try {
        //take out data from body of request
       var {title, qoute, author} = req.body;

       //fetch file
       var qoutes = await readFile(`${__dirname}/../data/qoutes.json`,'utf-8')
      
       //push new qoute
       var newQoute = {
           id: uuid(),//random id 
           title,
           qoute,
           author,
       };
       qoutes.push(newQoute)
       //writeFile with updated data
       await writeFile(`${__dirname}/../data/qoutes.json`,JSON.stringify(qoutes))
       //send back response
        res.status(200).json({
            msg: "add qoutes"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.fetchQoute = async (req, res) => {
    try {
        res.status(200).json({
            msg: "fetch qoute"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateQoutes= async (req, res) => {
    try {
        res.status(200).json({
            msg: "update qoutes"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteQoutes = async (req, res) => {
    try {
        res.status(200).json({
            msg: "delete qoutes"
        })
    } catch (error) {
        console.log(error)
    }
}