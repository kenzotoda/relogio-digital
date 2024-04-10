const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function newTime() {

    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);
}

// função que bota um zero na frente do tempo quando ele é menor que 10
function fixTime(time) {              
    return time < 10 ? '0'+time : time;
}


newTime();  // corrige um pequeno bug após recarregar a página

// "setInterval" executa uma ação a cada intervalo de tempo
// trabalha com milisegundos, 1000 milisegundos = 1 segundo
setInterval(newTime, 1000);  

