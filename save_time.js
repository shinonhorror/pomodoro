const minsave = document.querySelector(".save_mins");
const hrsave = document.querySelector(".save_hour");

let saved_time = 0;

function savedFocustime(mins) {
    saved_time += mins;
    hrsave.textContent = Math.floor(saved_time/60); 
    minsave.textContent = saved_time % 60 > 9 ? saved_time % 60 : `0${saved_time % 60}`; 
}
