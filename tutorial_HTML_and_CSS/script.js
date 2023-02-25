var show = false;

function toggle() {
  if (window.innerWidth < 733) {
    if (show) {
      document.getElementById("options").style.display = "block";
    } else {
      document.getElementById("options").style.display = "none";
    }

    show = !show;
  }
  else{
    document.getElementById("options").style.display = "flex"
  }
}

