const admin = require("../models/passwordSchema.js");
var bcrypt = require('bcrypt');
const saltRounds = 10;


class passwordController{


    async changePassword (req,res){

            try{

                const newPassword= req.body.newPassword;
                const hashedPassword= await bcrypt.hash(newPassword,saltRounds);
                let password = await admin.updateMany({$set:{password:hashedPassword}});
                res.status(200).send("Password Changed Sucessfully");
            }

            catch(error){

                res.status(500).send(error);
            }

           
    }

    
}


module.exports = new passwordController;