
var firebaseConfig = {
      apiKey: "AIzaSyBxU0-PTMwNtiXRvXMYSptDRenCXDIM4Bg",
      authDomain: "kwitter-6d595.firebaseapp.com",
      databaseURL: "https://kwitter-6d595-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d595",
      storageBucket: "kwitter-6d595.appspot.com",
      messagingSenderId: "982656353603",
      appId: "1:982656353603:web:be1a1514e2a4e0067c9bf6",
      measurementId: "G-1EFV7B0QYG"
    };    
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

 function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room Name"});
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room_name"+Room_names);
      row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}


getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
