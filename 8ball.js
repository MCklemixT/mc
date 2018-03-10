function getword(){
  
  var words = ["Definately" , "Definately Not" , "You Can Count On It" , "Ask Again" , "You Cant Count On It" , "Are You Kidding Me?"]
  
  var choice = Math.floor(Math.random() * words.length)
  
  return words[choice]
}

function putword() {
  document.getElementById("answer").innerHTML = getword()
  document.getElementById("8ball2").style.animation = "shake 1s"
  document.getElementById("button2").style.display = "none"
  
  setTimeout(function() {
    document.getElementById("answer").innerHTML = "Ask Me A Question"
    document.getElementById("8ball2").style.animation = ""
    document.getElementById("button2").style.display = ""
  } , 3000)
}