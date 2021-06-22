FlowRouter.route('/adminSignin', {
    name: 'adminSignin',
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
  

 