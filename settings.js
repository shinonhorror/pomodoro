/** There selected a different objectts in DOM */
const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const longBreakTimeInput = document.querySelector("#longBreakTime");
const longBreakInterval = document.querySelector("#longBreakInterval");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
/** Added a new event, when we click on button "save settings" */

document.querySelector("form").addEventListener("submit", (e)=>{
    pause_all();
    e.preventDefault();
    localStorage.setItem("focusTime",focusTimeInput.value); // Saved a key = focusTime, value = value, which was write in input form
    localStorage.setItem("breakTime",breakTimeInput.value);
    localStorage.setItem("longBreakTime",longBreakTimeInput.value);
    localStorage.setItem("longBreakInterval",longBreakInterval.value);
    localStorage.setItem("music", select_background.selectedIndex);
    localStorage.setItem("alarm", select_alarm.selectedIndex);
    localStorage.setItem("background_range", background_range.value);
    localStorage.setItem("alarm_range", alarm_range.value);
    window.location.hash="nav";
});

/** Added a new event, when we click on button "reset" */

resetBtn.addEventListener("click", ()=>{
    count = 0;
    startBtn.classList.remove("btn_hiddden"); // show a button named "start"
    pauseBtn.classList.remove("btn_animation");
    resetBtn.classList.remove("btn_animation");
    clearTimeout(initial); 
    setProgress(0); 
    mindiv.textContent = 0;
    secdiv.textContent = 0;
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("resume");
    startBtn.classList.remove("break");
    startBtn.textContent = "Start";
    localStorage.setItem("btn", "focus");
    background_music("stop");
});

/** Added a new event, when we click on button "pause/resume" */

pauseBtn.addEventListener("click", ()=>{
    if (paused == undefined){
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout(()=>decremenT(), 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");
        option = localStorage.getItem("music");
        value = +localStorage.getItem("background_range");
        background_music(option,value); // select a background music
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        value = +localStorage.getItem("background_range");
        background_music("stop", value);
        paused = true;
    }
});