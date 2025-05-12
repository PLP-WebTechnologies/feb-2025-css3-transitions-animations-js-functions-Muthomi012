// Function to toggle theme and store preference
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
  
    // Store theme in localStorage
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  
    // Add animation class temporarily
    body.classList.add('animated');
    setTimeout(() => body.classList.remove('animated'), 500);
  }
  
  // Function to apply saved theme on load
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }
  
  // Attach event and initialize
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  loadTheme();
  