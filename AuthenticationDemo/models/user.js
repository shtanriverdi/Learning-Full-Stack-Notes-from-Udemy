const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Username cannot be blank']
    },
    hashedPassword: {
        type: String,
        require: [true, 'Password cannot be blank']
    }
});

// This adds a static moethod on the User model
userSchema.statics.findAndValidateUser = async function (username, password) {
    // "this" refers to the particular model/schema which will be the "User" 
    const foundUser = await this.findOne({ username });
    console.log("foundUser: ", foundUser);
    if (!foundUser) {
        return false;
    }
    const isValid = await bcrypt.compare(password, foundUser.hashedPassword);
    return isValid ? foundUser : false;
}

// This runs before we save the created user instance into mongoDB,
// SO that we can modify the way we want it to be
// Before a user is saved, runs this middleware that hashes the password and stores
userSchema.pre('save', async function(next) {
    /* If a user wants to change their username but not the password
        We don't want to rehash the same password here
    */
    // To not hash the same password again and again
    if (!this.isModified('hashedPassword')) {
        // Just continues saving the model without hashing again
        return next();
    }
    // Here "this" refers to the "user" instance model object, the created one
    console.log("this.username: ", this.username);
    console.log("this.hashedPassword: ", this.hashedPassword);
    this.hashedPassword = await bcrypt.hash(this.hashedPassword, 12);
    next(); // This ensures that we will continue saving the model into db
    /*
     The next simply means to not block the execution 
     and carry forward to the next mongoose middleware (if it exists)
      or to your actual save operation. 
      Your middleware should always call the next() else you code is blocked. */
})

module.exports = mongoose.model('User', userSchema);