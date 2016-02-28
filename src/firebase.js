Firebase.enableLogging(true);
var f = new Firebase('https://cardmill.firebaseio.com/');
f.on('value', function(data)) {
  alert(data);
}
