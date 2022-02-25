/*Binome : Ragelhassi Ayman Et Zamakhchari Mouad / 2APG1 EMSI CENTRE*/
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register()
{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login()
{
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
}
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  function myFunction1() {
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  function validation(f) {
    if (f.mdp1.value == '' || f.mdp2.value == '') {
      alert('Tous les champs ne sont pas remplis');
      f.mdp1.focus();
      return false;
      }
    else if (f.mdp1.value != f.mdp2.value) {
     document.getElementById("messages").innerHTML="Mot De Passe sont different";
      f.mdp1.focus();
      return false;
      }
    else if (f.mdp1.value == f.mdp2.value) {
      return true;
      }
    else {
      f.mdp1.focus();
      return false;
      }
    }
    /*------------------------------stocker le infos -----------------------------*/
var nom = document.getElementById('nom_inscription');
var prenom = document.getElementById('prenom_inscription');
var email = document.getElementById('email_inscription');
var mdp = document.getElementById('mdp_inscription');

function stocker() {
    localStorage.setItem('nom', nom.value);
    localStorage.setItem('prenom', prenom.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('mdp', mdp.value);
    alert('Inscription Reussie');
}
function check()
 {

  var storedemail = localStorage.getItem('email');
  var storedmdp = localStorage.getItem('mdp');

  var useremail = document.getElementById('x');
  var usermdp = document.getElementById('myInput');

  if(useremail.value == storedemail && usermdp.value == storedmdp) {
    alert('You are logged in.');
  }else {
      alert('ERROR');
  }
}
function test()
{
  window.location = '../Html/panier.html';
}