const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.dropbtn');
  const content = dropdown.querySelector('.dropdown-content');

  btn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  content.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });
});
