const PORT = process.env.PORT || 3000;
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
import Chat from './models/chat.js';




async function main() {
  await mongoose.connect(MONGO_URI);
}


main()
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));





let chats =[
    {
        from: "neha",
        to: "priya",
        msg: "hello from neha to priya",
        created_at: new Date()
    },
    {
        from: "ravi",
        to: "sita",
        msg: "hello from ravi to sita",
        created_at: new Date()
    },
    {
        from: "john",
        to: "doe",
        msg: "hello from john to doe",
        created_at: new Date()
    },
    {
        from: "alice",
        to: "bob",
        msg: "hello from alice to bob",
        created_at: new Date()
    },
    {
        from: "charlie",
        to: "david",
        msg: "hello from charlie to david",
        created_at: new Date()
    }
];

Chat.insertMany(chats)
.then(() => {
    console.log("Chats inserted successfully");
    mongoose.connection.close();
})
.catch(err => {
    console.log("Error inserting chats:", err);
});
