const { default: mongoose, Types } = require("mongoose");
mongoose.connect('mongodb+srv://officialworksagar24x7:.........@cluster0.27mwusz.mongodb.net/')

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require: true},
    lastName:{
        type : String,
        require: true
    }
   
})

const User = mongoose.model('User' , UserSchema)

module.exports= {
    User
}
