function showToast(type, message) {
  const container = document.getElementById('toast-container');


  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  let iconHTML = "";
  if (type === 'success') {
    iconHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else if (type === 'error') {
    iconHTML = '<i class="fas fa-times-circle"></i>';
  } else if (type === 'warning') {
    iconHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
  } else {
    iconHTML = '<i class="fa-solid fa-circle-info"></i>';
  }

  toast.innerHTML = `${iconHTML} <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideIn 0.4s ease reverse forwards";
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}