const config = {
    secret: "kanishka-loves-books"
  };


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


import { Meteor } from 'meteor/meteor';
import { UsersCollection} from '../../../client/imports/db/Users/Users';

Meteor.methods({
    async 'user.signup'  (data) {

  
  var user = new UsersCollection({
    username: data.username,
    email: data.email,
    password: bcrypt.hashSync(data.password, 8),
    role:"Admin"
  });

  user.insert((err, user) => {
    if (user) {
       return { message: "Blogger registered successfully!" }
   
    }else{
        throw new Meteor.Error('server error');
      
    }

  
  });
},



async 'user.signin'  (data) {
 const checkuser=await  UsersCollection.findOne({
    email: data.email
  })

      if (!checkuser||checkuser==null) {
        return {message:"Blogger not Found"}
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

      var token = jwt.sign({ email: checkuser.email, username: checkuser.username, }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

     

    
      res.status(200).send({
      
        username: checkuser.username,
        email: checkuser.email,
        roles: checkuser.role,
        accessToken: token
      });
  
}
})