FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout');
  }
});


FlowRouter.route('/insert', {
  name: 'insert',
  action(){
    BlazeLayout.render('MainLayout', {main: 'insertwords'});
  }
});
