Meteor.publish('dict', function(){
  return Dictionary.find({author: this.userId});
});
