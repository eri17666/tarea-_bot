function obtenerSaludo() {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  
  if (horaActual >= 6 && horaActual < 12) {
    return "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}
document.addEventListener("DOMContentLoaded", () => 
  {
  const saludoSpan = document.getElementById('saludo-span');
  saludoSpan.textContent = obtenerSaludo();;
  });
