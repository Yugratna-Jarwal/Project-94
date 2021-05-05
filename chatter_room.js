// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDLlmcFG1RFObr5uhpqGTZh8HP8RxlROss",
      authDomain: "chatter-711c3.firebaseapp.com",
      databaseURL: "https://chatter-711c3-default-rtdb.firebaseio.com",
      projectId: "chatter-711c3",
      storageBucket: "chatter-711c3.appspot.com",
      messagingSenderId: "570049970632",
      appId: "1:570049970632:web:fd73f72a7ac073bcd3c0fd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
