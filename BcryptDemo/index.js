const bcrypt = require('bcrypt');

// const hashPassword = async (password) => {
//     // Generates a salt, adds extra security
//     const salt = await bcrypt.genSalt(12); // 12 is the standart
//     console.log("salt: ", salt);

//     // Hash a password
//     const hash = await bcrypt.hash(password, salt);
//     console.log("hash: ", hash);
// }

const hashPassword = async (password) => {
    // Generates a salt, adds extra security
    const saltRounds = 12; // 12 is the standart recomended
    const hash = await bcrypt.hash(password, saltRounds); 
    console.log("hash: ", hash);
}

const login = async (password, hashedPassword) => {
    // Return true or false, compares the plain text password
    // with the hased one and check if it is true
    const result = await bcrypt.compare(password, hashedPassword);
    if (result) {
        console.log(":) CORRECT result, LOGGED YOU IN!");
    } else {
        console.log(":( INCORRECT Password");
    }
}

hashPassword('monkey');
login('monkey', '$2b$12$0BJzzvFc/6zKq3Yn0Eq94OBUh3dTMcMN42r/.kTZwrGmKLnd.5jem');
// login('monkey', '$2b$12$6GlKPw/wk2612VEopDYbxO4h.BER.PUQDlucz.1RTBOk0Me9rr.JO');
// login('monkey', '$2b$12$6GlKPw/wk2612VEopDYbxO4h.BER.PUQDlucz.1RTBOk0Me9rr.JO');