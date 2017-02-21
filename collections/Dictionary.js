Dictionary = new Meteor.Collection('dict');

Dictionary.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

DictSchema = new SimpleSchema({
  word: {
    type: String,
    label: "Word"
  },
  meaning: {
    type: String,
    label: "Meaning"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date()
    },
    autoform:{
      type: "hidden"
    }
  }
});

Dictionary.attachSchema( DictSchema );
