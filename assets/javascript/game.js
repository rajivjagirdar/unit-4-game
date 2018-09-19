//create random number to guess to and put it in random number div section

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*120)+1; 

    $("#randomNumber").text(Random);

// create variables for the random numbers associated with each gem
    var num1= Math.floor(Math.random()*12)+1;
    var num2= Math.floor(Math.random()*12)+1;
    var num3= Math.floor(Math.random()*12)+1;
    var num4= Math.floor(Math.random()*12)+1;

//create variables for wins, losses and points the user has during the game
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

//put wins and losses in win/losses div sections 
  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  
//reset function that clears the random number to guess to (and makes a new one and displays in it the div) 
//and resets the user total and creates new random numbers on each gem variable   
  function reset(){
        Random=Math.floor(Math.random()*120)+1;
        $("#randomNumber").text(Random);
        num1= Math.floor(Math.random()*12)+1;
        num2= Math.floor(Math.random()*12)+1;
        num3= Math.floor(Math.random()*12)+1;
        num4= Math.floor(Math.random()*12)+1;
        userTotal= 0;
        $("#finalTotal").text(userTotal);
        } 
//create a function that shows if you won and adds on the wins in the correct div
  function winner(){
  alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
  }
  //create a function that shows if you lose and adds to the loss in the correct div
  function loser(){
  alert ("You lost!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
  }
  //create click function for the gems
  //random number on gem added to user total 
  //set win/loss condition
  //do for each gem variable
  
    $("#one").on ("click", function(){
      userTotal = userTotal + num1;
      $("#finalTotal").text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $("#two").on ("click", function(){
      userTotal = userTotal + num2;
      $("#finalTotal").text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $("#three").on ("click", function(){
      userTotal = userTotal + num3;
      $("#finalTotal").text(userTotal);
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $("#four").on ("click", function(){
      userTotal = userTotal + num4;
      $("#finalTotal").text(userTotal); 
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
}); 