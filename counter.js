let count = 0;
document.getElementById("decreaseBtn").onclick = function() {
  count--;
  document.getElementById("count").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
 count++;
 document.getElementById("count").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
 count =0;
 document.getElementById("count").innerHTML = count;
}


