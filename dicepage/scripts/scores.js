

var Modal =document.querySelector('#cash-form');



var final = document.getElementById('status').textContent;

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
var money = Modal['examplemoney'];
var bank_name = Modal['bank_name'];
var bank_account= Modal['account_number'];


//---------------------------------------*************************---------------------------------------------------------------//
//---------------------------------------SUBMIT PLAYER INFORMATION---------------------------------------------------------------//
//---------------------------------------*************************---------------------------------------------------------------//


var count =0


// DATA FROM THE MODAL............//
Modal.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    // GET USER INFOR-------///
  
    // Add a new document with a generated id.
firestore.collection("Money").add({
  
    name: Modal.name.value,
    Email: Modal.email.value,
    Money: Modal.money.value,
    Bankname: Modal.Bank_name.value,
    Accountnumber: Modal.account_number.value,
   
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    
    
   
    
    
});
    
 
    Modal.name.value ='';
    Modal.email.value ='';
    Modal.money.value='';
    Modal.Bank_name.value='';
    Modal.account_number.value='';

     

    if(counter<0){
    document.getElementById('a').innerHTML ;
    counter++;
}
   else{
    document.getElementById("pay").disabled=true;
} 
    
    
    
    
    })



 //------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//

