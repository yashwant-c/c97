// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDzFnHNylkc5149aDVgEOh7zkKRHU6AhaQ",
      authDomain: "kwitter-85ad6.firebaseapp.com",
      databaseURL: "https://kwitter-85ad6-default-rtdb.firebaseio.com",
      projectId: "kwitter-85ad6",
      storageBucket: "kwitter-85ad6.appspot.com",
      messagingSenderId: "101932165671",
      appId: "1:101932165671:web:1a8d5e860075d9d46cfc02",
      measurementId: "G-1VPRLDRQGG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - "+ Room_names);
        row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name" 
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_room.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location ="kwitter.html";
}