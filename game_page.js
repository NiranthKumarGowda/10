player1_name=localStorage.getItem("player_1")
player2_name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name
 
document.getElementById("player_question").innerHTML="Question turn= "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn= "+player2_name