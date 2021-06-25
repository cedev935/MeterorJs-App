
  
  FlowRouter.route('/', {
    name: 'userSignin',
     async action() {
      await import('../imports/Pages/User/Signin/signin');
      BlazeLayout.render('blog',{main:'usersignin'});
    }
  }); 
  

  FlowRouter.route('/UserPost', {
    name: 'userPosts',
     async action() {
      await import('../imports/Pages/User/Posts/posts');
      BlazeLayout.render('blog',{main:'userposts'});
    }
  }); 


  FlowRouter.route('/CreatePost', {
    name: 'createPosts',
     async action() {
      await import('../imports/Pages/User/createPost/createpost');
      BlazeLayout.render('blog',{main:'createpost'});
    }
  }); 


  FlowRouter.route('/editPost/:id', {
    name: 'editPost',
    async action() {
      await import('../imports/Pages/User/editPost/editpost');
      BlazeLayout.render('blog', {main: 'editpost'});
    }
  }); 
 