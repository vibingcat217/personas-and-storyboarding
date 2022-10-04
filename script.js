function openNav() {
  var navitems = document.getElementById("sidenav").getElementsByTagName("a");
  for (let i = 0; i < navitems.length; i++) {
    navitems[i].style.display = "block";
    navitems[i].onclick = closeNav;
  }
  document.getElementById("openbtn").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
  var navitems = document.getElementById("sidenav").getElementsByTagName("a");
  for (let i = 0; i < navitems.length; i++) {
    navitems[i].style.display = "none";
    navitems[i].onclick = null;
  }
  document.getElementById("openbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
}
