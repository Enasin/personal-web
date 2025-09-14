const navbar = document.getElementById('navbar');

function openSidebar() {
  navbar.classList.add('show');
}

function closeSidebar() {
  navbar.classList.remove('show');
}

// copy function 
function copyCode(button) {
  const code = button.nextElementSibling.innerText;
   navigator.clipboard.writeText(code).then(() => {
    button.textContent = "copied";
    setTimeout(() => button.textContent = "copy", 2000);
   });
}
