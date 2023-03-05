// Establecer la fecha de finalización del contador
const countDownDate = new Date("2023-04-04").getTime();

// Actualizar el contador cada segundo
const x = setInterval(function() {

  // Obtener la fecha y hora actuales
  const now = new Date().getTime();

  // Calcular la distancia entre la fecha de finalización y la fecha actual
  const distance = countDownDate - now;

  // Cálculos para días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en el elemento con id="contador"
  const contador = document.getElementById("contador");
contador.innerHTML = `
  <div class="contador-dias">
    <span class="contador-cifra">${days}</span>
    <span class="contador-label">días</span>
  </div>
  <div class="contador-separador">:</div>
  <div class="contador-horas">
    <span class="contador-cifra">${hours}</span>
    <span class="contador-label">horas</span>
  </div>
  <div class="contador-separador">:</div>
  <div class="contador-minutos">
    <span class="contador-cifra">${minutes}</span>
    <span class="contador-label">minutos</span>
  </div>
  <div class="contador-separador">:</div>
  <div class="contador-segundos">
    <span class="contador-cifra">${seconds}</span>
    <span class="contador-label">segundos</span>
  </div>
`;

  // Si la cuenta regresiva termina, mostrar un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
}, 1000);

setInterval()