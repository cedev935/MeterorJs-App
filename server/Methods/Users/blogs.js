import { Meteor } from 'meteor/meteor';
import { BlogsCollection} from '../../../imports/db/Blogs/blogs';


Meteor.methods({
  async 'blog.add'  (data) {
    var blog=data.blog;

    var id=await BlogsCollection.insert({
        blog,
        userid:data.uid,
     createdAt: new Date(),
    });
    if(id){
        return id;
    }
    else{
      throw new Meteor.Error('server error');
    }        
  },
  async 'blog.update'  (data) {
    var id=data.id;
    var blog=data.blog;
    
    var id=await BlogsCollection.update(
      { _id: id },
      {
        $set: {
          blog,
  
        }
      }
   )
    
    if(id){
        return id;
    }
    else{
      throw new Meteor.Error('server error');
    }        
  },
  async 'blog.remove'(blogId) {
    console.log(blogId);

    const blog = BlogsCollection.findOne({ _id: blogId });
    
    if (!blog) {
      throw new Meteor.Error('Access denied.');
    }

    await BlogsCollection.remove(blogId);
  },
  async 'blog.edit'(blogId) {
    console.log(blogId);

    const blog = BlogsCollection.findOne({ _id: blogId });
    
    if (!blog) {
      throw new Meteor.Error('Access denied.');
    }

    return blog;
  },

});
