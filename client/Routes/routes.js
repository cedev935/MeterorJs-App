
  FlowRouter.route('/adminSignin', {
    name: 'adminsignin',
    async action() {
      await import('../imports/Pages/Admin/Signin/signin');
      BlazeLayout.render('blog', {main: 'adminsignin'});
    }
  }); 
  
  FlowRouter.route('/', {
    name: 'userSignin',
     async action() {
      await import('../imports/Pages/User/Signin/signin');
      BlazeLayout.render('blog',{main:'usersignin'});
    }
  }); 


  FlowRouter.route('/User/Posts', {
    name: 'UserPosts',
     async action() {
      await import('../imports/Pages/User/Posts/posts');
      BlazeLayout.render('blog',{main:''});
    }
  });
  
  FlowRouter.route('/Players', {
    name: 'Players',
     async action() {
      await import('../imports/Pages/Players/players');
      BlazeLayout.render('home',{main:'players'});
    }
  }); 