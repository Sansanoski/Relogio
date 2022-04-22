const chackHours = document.querySelector('.container-hora')


const startHours = () => {
    const newhours = new Date()
    const seconds = newhours.getSeconds()
    const minuts = newhours.getMinutes()
    const hours = newhours.getHours()

    

    chackHours.innerHTML = `
       <div class="contaner-time"> <p class="number-time">${String(hours < 10 ? `0${hours} ` : `${hours}`  )} </p></div> 
       <div class="contaner-time"> <p class="number-time">${String(minuts < 10  ? `0${minuts}` : `${minuts}`)} </p></div>
       <div class="contaner-time"> <p class="number-time">${String(seconds < 10 ? `0${seconds}` : `${seconds}`)} </p></div>
    `
    
}
setInterval(startHours , 1000)

