function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open"); 
}

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle-checkbox');
  const body = document.body;

  // Load saved mode
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', function() {
    if (toggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
});
