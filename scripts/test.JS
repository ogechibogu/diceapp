
var Modal =document.querySelector('#form-example');



// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkqQ0c3kTYn5YFz-Fe5an4GB5tAkBrfig",
    authDomain: "dice-edb21.firebaseapp.com",
    databaseURL: "https://dice-edb21.firebaseio.com",
    projectId: "dice-edb21",
    storageBucket: "dice-edb21.appspot.com",
    messagingSenderId: "848686154567",
    appId: "1:848686154567:web:9dea13f8e64ff628fc0262",
    measurementId: "G-XJ9NE5WJ1G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  console.log(firebase);

var firestore = firebase.firestore();


var Name= Modal['exampleFormControlInput1'];
var Email= Modal['exampleInputEmail1'];
 var bank_name = Modal['bank_name'];
   var account_number= Modal['account_number'];

//---------------------------------------*************************---------------------------------------------------------------//
//---------------------------------------SUBMIT PLAYER INFORMATION---------------------------------------------------------------//
//---------------------------------------*************************---------------------------------------------------------------//

// Add a new document with a generated id.

// DATA FROM THE MODAL............//
Modal.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    // GET USER INFOR-------///
  
    // Add a new document with a generated id.
firestore.collection("scores").add({
  
    name: Modal.name.value,
    Email: Modal.email.value,
    Account_number: Modal.account_number.value,
    Bank_name: Modal.Bank_name.value,
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    
    
   
    
    
});
    // clear form fileds and redirect page//
 
    Modal.name.value ='';
    Modal.email.value ='';
    Modal.account_number.value ='';
    Modal.Bank_name.value ='';
     
window.location.href = "paymentpage.html";
    
    
    
    })





 //------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//



    


