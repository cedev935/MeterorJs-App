import { Template } from 'meteor/templating';



import './createpost.html';
import './createpost.css';

var quill

Template.addblog.onRendered(function () {
    // counter starts at 0

    // quill = new Quill('#editor', {
    //     theme: 'snow',
    //     modules :{
    //         toolbar: [
    //           ['bold', 'italic', 'underline', 'strike'],       
    //           ['blockquote', 'code-block'],
          
    //           [{ 'header': 1 }, { 'header': 2 }],              
    //           [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //           [{ 'script': 'sub'}, { 'script': 'super' }],     
    //           [{ 'indent': '-1'}, { 'indent': '+1' }],        
    //           [{ 'direction': 'rtl' }],                         
          
    //           [{ 'size': ['small', false, 'large', 'huge'] }],  
    //           [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
    //           [{ 'color': [] }, { 'background': [] }],          
    //           [{ 'font': [] }],
    //           [{ 'align': [] }],
          
    //           ['clean'],                                     
          
    //           ['link', 'image', 'video']                         
    //         ]
    //       },
    //     placeholder: 'Please Add the Image/Video first and Add the Content',
        
    //     })

       
   
  });


//   Template.blogs.helpers({
//     blogs(){
//             return BlogsCollection.find({},{sort: { createdAt: -1 }}).fetch();  
//     },
    

// });



var update=false;
var id="";
Template.addblog.events({
    'click .add':function (event){
        
     var blog  = document.getElementById("editor").innerHTML;

        
        // console.log(blog)
        // console.log(quill.getContents())
        // console.log(quill.getText())


        //alert(update+id);
      
var uid=localStorage.getItem("id")
        Meteor.call('blog.add',{blog,uid},(err,id)=>{
            if(err){
              alert(err);
            }
            else{
              document.getElementById("editor").innerHTML="";
                FlowRouter.go(`/UserPost`);
             
            }
        });
      
     

    },



});


// Template.blogs.events({



//     'click .delete'() {
//         Meteor.call('blog.remove', this._id);
//       },
//       'click .edit'() {
//         Meteor.call('blog.edit',this._id,(err,post)=>{
//             if(err){
//                 alert(err);
//             }
//             else{
//                 quill.root.innerHTML=post.blog;
            
//                 id=post._id;
//                 update=true;
//             }
//         });
//       },


// })