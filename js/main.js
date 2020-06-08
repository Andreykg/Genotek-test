function openbox(id) {
   display = document.getElementById(id + "-box").style.display;
   console.log(display);
   if (display == 'none') {
      document.getElementById(id + "-box").style.display = 'block';
      var elem = document.getElementById("title-" + id).classList.remove("box-closed");
   } else {
      document.getElementById(id + "-box").style.display = 'none';
      var elem = document.getElementById("title-" + id).classList.add("box-closed");
   }
}

function clearInput(id) {
   document.getElementById("input-" + id).value = '';
}
