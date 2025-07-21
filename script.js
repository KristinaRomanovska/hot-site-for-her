
function showText(id) {
  const messages = document.querySelectorAll('.message');
  messages.forEach(m => m.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
