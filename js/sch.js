function showMonday(){
  var x = document.getElementById("mon");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  } else {
      x.style.display = "block";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  }
}
function showTuesday(){
  var x = document.getElementById("tue");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("mon").style.display = "none";      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  } else {
      x.style.display = "block";
      document.getElementById("mon").style.display = "none";      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  }
}
function showWednesday(){
  var x = document.getElementById("wed");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  } else {
      x.style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("thur").style.display = "none";
      document.getElementById("fri").style.display = "none";
  }
}
function showThursday(){
  var x = document.getElementById("thur");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("fri").style.display = "none";
  } else {
      x.style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("fri").style.display = "none";
  }
}
function showFriday(){
  var x = document.getElementById("fri");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
  } else {
      x.style.display = "block";
      document.getElementById("mon").style.display = "none";
      document.getElementById("tue").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thur").style.display = "none";
  }
}
