const User = require("../model/User");
const bcrypt = require("bcrypt");

const signUp = async(req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        profilePicture
    } = req.body;

    const isUserAlreadySignedUp = await User.findOne({"email" : email}).lean();
    if(isUserAlreadySignedUp){
        return res.status(200).json({'success' : 'Signed Up Successfully'});
        // return res.status(401).json({err : 'User Already Signed Up with us'})
    }

    const encryptedPassword = await bcrypt.hash(password, 12);
    const object = {
        firstName,
        lastName,
        email,
        password : encryptedPassword,
    }

    const user = new User(object);
    const isUserSavedOrNot = user.save();
    return res.status(200).json({'success' : 'Signed Up Successfully'});
}


module.exports = {
    signUp
}