const form = document.getElementById("myForm");
form.onsubmit = function() {return false;}
  form.addEventListener("submit", (event) => {

    console.log(event);
    console.log(document.getElementById('customRange2').val());

});