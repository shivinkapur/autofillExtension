jQuery(function($){
  var Firebase = require("firebase");
  var myFirebaseRef = new Firebase("https://cardmill.firebaseio.com/");
  myFirebaseRef.set({
    title: "Hello World!",
    author: "Firebase",
    location: {
      city: "San Francisco",
      state: "California",
      zip: 94103
    }
  });

  myFirebaseRef.on('value', function(data) {
    alert(data);
  })
});
