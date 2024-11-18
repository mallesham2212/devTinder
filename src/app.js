const express = require('express')
const app = express()

const {adminAuth,userAuth} =require("./middleware/adminAuth")


app.use("/admin",adminAuth);

app.get("/admin/send",(req,res)=>{
	res.send("send all data");
})

app.use("/user",userAuth,(req,res)=>{
	res.send("user data sending");
})

app.get("/admin/delete",(req,res)=>{
	res.send("delete the user");
	
})

// app.get("/", (req, res, next) => {
// 	next();
// 	// res.send('Hello World 1  ')
// })

// app.get('/', (req, res, next) => {
// 	next();
// },
// 	(req, res, next) => {
// 		next();
// 	},
// 	(req, res, next) => {
// 		next();
// 	},
// 	(req, res, next) => {
// 		next();
// 	},
// 	(req, res) => {
// 		res.send('Hello World eui6ty');
// 	}
// )

// app.get('/home', function (req, res) {
// 	res.send('Hello World  from home ')
// })

// app.use('/contact', function (req, res) {
// 	res.send('Hello World  from contact ')
// })

app.listen(4000, () => {
	console.log("server connecting...");
})