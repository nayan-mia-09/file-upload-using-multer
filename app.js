const express = require("express");
const cors = require("cors");
const multer = require("multer");

let app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
     cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
     cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({ storage: storage });



app.get("/", (req, res) =>{
    res.send("Hello World")
})


app.post("/upload", upload.single("file"), (req, res)=>{
    res.send("File Upload Successfully")
})


app.listen(5000, () => {
    console.log("Server is running success")
})