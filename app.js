const showmenu =    document.getElementById("firstDropdown");
const displaydropdown = document.getElementById("secondDropdown");

function openNav() {
    document.getElementById("topNav").style.width = "65%";
  }
  
  function closeNav() {
    document.getElementById("topNav").style.width = "0%";
  }

  function dropDown() {
    showmenu.classList.toggle("show");
  }
  function dropmenu() {
    displaydropdown.classList.toggle("show");
  }
  
document.getElementById("firstDropdown").addEventListener('click', function (event) {
  console.log("click outside to close")  
  event.stopPropagation();
});
