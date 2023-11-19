document.addEventListener('DOMContentLoaded', function () {
    const btnMostrarPopup = document.getElementById('mostrarPopup');
    const popup = document.getElementById('miPopup');
    const btnCerrarPopup = document.getElementById('cerrarPopup');
  
    btnMostrarPopup.addEventListener('click', function () {
      popup.style.display = 'flex';
    });
  
    btnCerrarPopup.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  });
  