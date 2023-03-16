var y =Math.floor(Math.random() * 10 + 1);

var guess=1;

var username=localStorage.getItem("playername");
function Submit(){
var x = document.getElementById("guessField").value ;

if( x == y)
{
    alert("YOU WON!!!!"+username+" YOU GUESSED IT RIGHT IN"
    + guess +" Guess");
} 
else
if(x > y){

    guess++;
    alert("Oops sorry try a smaller number")

}
else {

    guess++;
    alert("Oops sorry try a bigger number")
}
}
function playAgain(){
    y =Math.floor(Math.random() * 10 + 1);
}


  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
