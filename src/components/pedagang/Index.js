
window.onclick = function (event) {
  openCloseDropdown(event);
};

function closeAllDropdown() {
  var dropdowns = document.getElementsByClassName("p-dropdown-expand");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("p-dropdown-expand");
  }
}

function openCloseDropdown(event) {
  if (!event.target.matches(".p-dropdown-toggle")) {
    //
    // Close dropdown when click out of dropdown menu
    //
    closeAllDropdown();
  } else {
    var toggle = event.target.dataset.toggle;
    var content = document.getElementById(toggle);
    if (content.classList.contains("p-dropdown-expand")) {
      closeAllDropdown();
    } else {
      closeAllDropdown();
      content.classList.add("p-dropdown-expand");
    }
  }
}



