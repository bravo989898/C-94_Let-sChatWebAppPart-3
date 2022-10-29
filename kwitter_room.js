//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBVq2RBbeqSD0YAueYHgky-CrTviJybznM",
  authDomain: "let-s-chat-web-app-f12b4.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-f12b4-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-f12b4",
  storageBucket: "let-s-chat-web-app-f12b4.appspot.com",
  messagingSenderId: "659419411061",
  appId: "1:659419411061:web:029512c3e6d5dfbc837e3c"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
word = "<h4 id='word_display'> Welcome "+ user_name + "!" + "</h4>";
document.getElementById("name").innerHTML = word;

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding roomName"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name-" + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
  
   

