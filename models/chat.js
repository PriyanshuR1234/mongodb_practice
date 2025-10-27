const mongoose= require("mongoose");

const chatSchema= new mongoose.Schema({
    from:{
        type:String,
        require: true
    },
    to:{
        type:String,
        require: true
    },
    msg:{
        type:String,
        kMaxLength:50
    },
    created_at:{
        type:Date,
        required: true
    }
});

const Chat = mongoose.model("Chat",chatSchema);

// Correct:
module.exports = Chat;
