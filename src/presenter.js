function obtenerSaludo(nombre) {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  
  let saludo = "";
  if (horaActual >= 6 && horaActual < 12) {
    saludo = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludo ="Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  
  if (nombre && nombre.trim() !== "") {
    saludo += ", " + nombre.trim();
  }

  return saludo;

}
document.addEventListener("DOMContentLoaded", () =>
  {
  const saludoSpan = document.getElementById('saludo-span');
  const inputNombre = document.getElementById('nombre');

  saludoSpan.textContent = obtenerSaludo();;
  inputNombre.addEventListener("input", () => {
    saludoSpan.textContent = obtenerSaludo(inputNombre.value);
    });
  });

  