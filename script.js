const time = document.getElementById('time');
const text = document.getElementById('text')

const interval = setInterval(() => {

    const local = new Date();

    time.innerHTML = local.toLocaleTimeString("en-US", { hour12: true });
    
    hora = local.toLocaleTimeString("en-US", { hour12: true })
    if (hora.includes("AM")) {
        text.innerHTML = "Good morning :)"
    } else {
        text.innerHTML = "Good afternoon :)"
    }
    

}, 1000);