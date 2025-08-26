function obtenerSaludo(nombre, genero, edad) {
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
    if (edad && edad > 30) {
    if (genero === "M") {
      saludo += ", Sr. " + nombre.trim();
    } else if (genero === "F") {
      saludo += ", Sra. " + nombre.trim();
    } else {
      saludo += ", " + nombre.trim();
    }
  } else {
      saludo += ", " + nombre.trim();
  }
}
  
  return saludo;

}

document.addEventListener("DOMContentLoaded", () =>
  {
  const saludoSpan = document.getElementById('saludo-span');
  const inputNombre = document.getElementById('nombre');
  const selectGenero = document.getElementById("genero");
  const inputEdad = document.getElementById("edad");

  function actualizarSaludo() {
    saludoSpan.textContent = obtenerSaludo(
      inputNombre.value,
      selectGenero.value,
      parseInt(inputEdad.value)
    );
  }

  saludoSpan.textContent = obtenerSaludo();
  inputNombre.addEventListener("input", actualizarSaludo);
  selectGenero.addEventListener("change", actualizarSaludo);
  inputEdad.addEventListener("input", actualizarSaludo);
});
  

  