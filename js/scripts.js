function factorial(num){
  if (num === 1) {
    return num;
  }
  else {
    return num * factorial(num-1);
  }
}
function factorial(num){
  var factorial = 1;
  if (num === 1) {
    return num;
  }
  else {
    for(i = 1; i<=num; i++){
      factorial *= i;
    }
  }
  return factorial;
}
function palindromes(string){
  var iter = string.length/2;
  var length = string.length-1;
  for(i = 0; i<= iter; i++){
    if(string[i] !== string[length-i]){
      return false;
    }
  }
  return true;
}
$(function(){
  alert("hello");
  $('#palindromesForm').submit(function(event){
    event.preventDefault();
    var word = $('#palindromesInput').val();
    var isPalindromes = palindromes(word);
    if (isPalindromes) {
      $('#palindromes').text("yes, it is");
    }
    else {
      $('#palindromes').text("no, it is not");
    }
  });
})
