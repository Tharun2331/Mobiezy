const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const { db } = require('./dbConfig.js')
const { Query } = require("./query")
const bcrypt = require("bcrypt")
require("dotenv").config()
const mysql = require("mysql")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(cors())

// db.connect((e) => {
//     if (e) {
//      console.log(e) 
//     } else {
//         console.log("successfully connected")
//     }
// })



app.post("/signup", async (req,res) => {
    const user = req.body.user
    const email = req.body.email
    const password = req.body.password
    const ConfirmPassword = req.body.confirmPassword
    console.log(user)
    console.log(email)
    console.log(password)
    if (password == ConfirmPassword) {}
        else {
            console.log("Password does not match! Try again")
        }

    db.getConnection ( async (err, connection)=> {
        if (err) throw (err)

        const searchUser = "SELECT * FROM USER WHERE emailid = ?"
        const search_query = mysql.format(searchUser,[email])

        const sqlInsert = "INSERT INTO USER (emailid, passwords, usernames) VALUES (?, ?, ?)"
        const insert_query = mysql.format(sqlInsert,[email,passwords,user])
        // await Query(`INSERT INTO USER (emailid, passwords, usernames) VALUES ('${email}', '${hashedPassword}', '${user}')`)

    await connection.query(search_query, async (err, result) => {
        if (err) throw (err)
        if (result.length != 0) {
         connection.release()
         console.log("User already exists")
        //  res.sendStatus(409) 
        } else {
         await connection.query (insert_query, (err, result)=> {
         connection.release()
         if (err) throw (err)
         console.log ("Created new User")
         res.send(`${user} is logged in!`)
        //  res.sendStatus(201)
        })
       }
    })
    
})
})

// app.post("/Login",(req,res) => {
//     const email = req.body.email
//     const password= req.body.password
//     console.log(email)
//     console.log(password)
    

// })

app.post("/Login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    db.getConnection ( async (err, connection)=> {
    if (err) throw (err)

    const searchUser = "Select * from USER where emailid = ?"
    const search_query = mysql.format(searchUser,[email])

    await connection.query (search_query, async (err, result) => {
    connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {
    console.log("User does not exist")
    // res.sendStatus(404)
    } 
    else {
        const password = result[0].password
        if (password == password) {
        console.log("---------> Login Successful")
        console.log(`${email} is logged in!`)
        } 
        else {
        console.log("---------> Password Incorrect")
        // alert("Password incorrect!")
        // res.sendStatus(404)
        } 
    }
    }) 
    }) 

})

port = 8000

app.listen(port, (req, res) => {
    console.log("running at 8000")
})