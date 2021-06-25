import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './signin.html';
import './signin.css'

var status=false
Template.login.onCreated(function loginOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  });
  
  Template.login.helpers({
getstatus(){
  
  if(localStorage.getItem('id')==null||localStorage.getItem('id')==undefined){
status=false
    return false
}else{
  status=true
return true
}

},

    counter() {
      return Template.instance().counter.get();
    },
  });
  
  Template.login.events({
    'submit form':function (event){
        event.preventDefault();
     
        var email = $('[name=email]').val();
        var password =$('[name=password]').val();

        if(status){
          
       

        Meteor.call('user.signin',{email,password},(err,det)=>{
            if(err){
                alert(err);
            }
            else{
              console.log(det);
              localStorage.setItem("role","User")
              localStorage.setItem("id",String(det.id))
              localStorage.setItem("email",String(det.email))
              FlowRouter.go(`/UserPost`);
              document.getElementById("email").value="";
                document.getElementById("password").value="";
            }
        });
      }else{

console.log('signup');
        Meteor.call('user.signup',{email,password},(err,det)=>{
          if(err){
              alert(err);
          }
          else{
            console.log(det);
            localStorage.setItem("role","User")
            localStorage.setItem("id",String(det.id))
            localStorage.setItem("email",String(det.email))
            FlowRouter.go(`/UserPost`);
            document.getElementById("email").value="";
              document.getElementById("password").value="";
          }
      });


      }

    }
  });
