const monthEl = document.querySelector('#month')
const daysEl =document.querySelector("#days") 
const hoursEl = document.querySelector("#hour")
const minutsEl = document.querySelector("#minuts")
const secondsEl = document.querySelector("#seconds");
const btnEl = document.querySelector('#btn');

const newYear = document.querySelector('#input');
// const newYear = " 1 Jan 2023 "
// console.log(newYear);

btnEl.addEventListener("click", ()=> {
    const countDown = ()=>{
        const newYearDate = new Date(newYear.value);
        const currentYear = new Date();
        
        const totalSeconds = (newYearDate - currentYear);
        
        // const month = Math.floor(totalSeconds / 3600 / 60 / 12);
        // console.log(month);
        const day = Math.floor(totalSeconds / 1000 / 60  /60 / 24);
        console.log(day);
        const hour = Math.floor(totalSeconds / 1000 / 60 /60) % 24;
        const minut = Math.floor(totalSeconds / 1000 / 60) % 60;
        const second = Math.floor(totalSeconds / 1000) % 60;
        
        // monthEl.innerHTML = month;
        daysEl.innerHTML = day;
        hoursEl.innerHTML = hour < 10 ? "0" + hour : hour;
        minutsEl.innerHTML = minut < 10 ? "0" + minut : minut;
        secondsEl.innerHTML = second < 10 ? "0" + second : second;
    };

    setInterval(countDown, 1000);
});
