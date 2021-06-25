const config = {
    secret: "kanishka-loves-books"
  };


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


import { Meteor } from 'meteor/meteor';
import { UsersCollection} from '../../../imports/db/Users/Users';


Meteor.methods({
    async 'user.signup'  (data) {

  
  var user = UsersCollection.insert({
  
    email: data.email,
    password: bcrypt.hashSync(data.password, 8),
    role:"User"
  });
console.log(user);
  
    if (user) {
  
       return {id:user,email:data.email, success:true, message: "Blogger registered successfully!" }
   
    }else{
     throw new Meteor.Error('server error');
    }

 
},



async 'user.signin'  (data) {
 const checkuser=await  UsersCollection.findOne({
    email: data.email
  })

      if (!checkuser||checkuser==null) {
        return {token:null,message:"Blogger not Found"}
      }

      var passwordIsValid = bcrypt.compareSync(
        data.password,
        checkuser.password
      );

      if (!passwordIsValid) {
        return {
          accessToken: null,
          message: "Invalid Password!"
        }
      }

      var token = jwt.sign({ email: checkuser.email }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

     

    
      return {
      
      id:checkuser._id,
        email: checkuser.email,
        roles: checkuser.role,
        accessToken: token
      }
  
}
})