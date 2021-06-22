import { Meteor } from 'meteor/meteor';
import { BlogsCollection} from '../../../imports/db/Blogs/blogs';


Meteor.methods({
    async 'blog.add'  (data) {
      var player=data.player;
      var score=data.score;
      console.log(data)
      var id=await BlogsCollection.insert({
          player,
          score,
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
      var player=data.player;
      var score=data.score;
      var id=await BlogsCollection.update(
        { _id: id },
        {
          $set: {
            player,
            score,
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
    async 'blog.remove'(playerId) {
      console.log(playerId);
  
    
  
      await BlogsCollection.remove(playerId);
    },

  
  });

