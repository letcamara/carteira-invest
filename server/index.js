const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "db",
	insecureAuth : true
});

app.use(cors());
app.use(express.json())

app.post("/register", (req, res) => {
	const { name } = req.body
	const { cost } = req.body
	const { category } = req.body

	let SQL = "INSERT INTO invest ( name, cost, category ) VALUES ( ?,?,? )"
	db.query(SQL, [name, cost, category], (err, res)=>{
		console.log(err)
	})
})

app.get("/getCards", (req, res)=>{
	let SQL = "SELECT * FROM invest";
	db.query(SQL, (err, result)=>{
		if(err) console.log(err)
		else res.send(result)
	})
}) 

app.listen(5174,()=>{
	console.log("Rodando servidor")
})