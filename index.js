require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const Chat = require('./models/chat');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB Atlas!");

        // // Now that the connection is established, perform database operations.
        // let chat3 = new Chat({
        //     from: "neha",
        //     to: "priya",
        //     msg: "hello from neha to priya",
        //     created_at: new Date()
        // });
        // const savedChat = await chat3.save();
        // console.log("Chat saved successfully:", savedChat);

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });

    } catch (err) {
        console.error("Error connecting or saving chat:", err.message);
        // You could also exit the process if the connection is critical.
        // process.exit(1);
    }
};

startServer();

app.get("/", (req, res) => {
    res.send("Welcome to the MongoDB Example");
});


app.get("/chats", async (req, res) => {
    try {
        const chats = await Chat.find();
        //console.log(chats);

        // res.send(chats);
        res.render("index.ejs", { chats: chats });
    } catch (err) {
        res.status(500).send("Error retrieving chats: " + err.message);
    }
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
