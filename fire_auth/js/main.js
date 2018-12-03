
// Innitialize cloud firestore through firebase
var db = firebase.firestore();

function storeData(){
// Add a new document in collection "cities"
var innerText= document.getElementById("text_field").value;
db.collection("kopo").doc().update({
    name: innerText
  
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
