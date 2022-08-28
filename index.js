// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
  });
  
 function updateDOM(){
    const item = document.getElementById('text')
   return  item.textContent = "This is really cool!"
 }
  