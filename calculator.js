// for clearing away the screen
function c(val) {
  document.getElementById("d").value=val;
}

// for entering/inputing the values and operators
function v(val) {
  document.getElementById('d').value+=val;
}

//Used for solving the the values that were put in.
function e() {
  try {
    c(eval(document.getElementById('d').value))
  }
  catch(e){
    c('Error')
  }
}
