const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    encry_password: {
        type: String,
        required: true,
    },
    salt: {
        type: String
    },
    profilephoto: {
        type: String,
    },
    dateofbarth: {
        type: Date,
    },
    fathersname: {
        type: String,
        maxlength: 25,
    },
    mothersname: {
        type: String,
        maxlength: 25,
    },
    mobilenumber: {
        type: Number,
        trim: true,
    },
    dateofappointment: {
        type: Date,        
    },
    dateofjoin: {
        type: Date,        
    },
    position: {
        type: String,
    },
    qualification: {
        type: String,
    },
    class: {
        type: Number
    },
    rollnumber: {
        type: String,
    },
    roll: {
        type: Number,
    },
},{timestamps: true});

userSchema.virtual("password")
.set(function(password) {
    this._password = password;
    this.salt = uuidv4();
    console.log("12356");
    this.encry_password = this.securePassword(password);
    console.log(`encry_password : ${this.encry_password}`);
    console.log("123567");
})
.get(function() {
    return this._password;
})

userSchema.method = {

    autheticate: function(userpassword) {
        return this.securePassword(userpassword) === this.encry_password;
    },

    securePassword: function(userpassword) {
        if (!userpassword) {
            console.log("123");
            return "";
        } try {
            console.log("1234");
            return crypto.createHmac('sha256', this.salt)
            .update(userpassword)
            .digest('hex');
        } catch (error) {
            console.log("12345");
            return "";
        }
    }
};

module.exports = mongoose.model("User", userSchema)