const firebaseConfig = {
      apiKey: "AIzaSyAG8uQQeNP9oha-SSMiWACCu1n3tJdEX1E",
      authDomain: "kwitter-9b53a.firebaseapp.com",
      databaseURL:"https://kwitter-9b53a-default-rtdb.firebaseio.com/",
      projectId: "kwitter-9b53a",
      storageBucket: "kwitter-9b53a.appspot.com",
      messagingSenderId: "802942055710",
      appId: "1:802942055710:web:26e83ca99c1f8f43df450f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStroage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
    function AddRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Add Room Name"
      });
      localStroage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=room;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log("name");
localStroage.setItem("room_name"),name;
window.location=kwitter_page.html;
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}