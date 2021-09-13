/** There selected a different objectts in DOM */
const el = document.querySelector(".timer");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn","focus"); // Data, which was write in localstorage saved, when we restart a browser, in this case, we saved a key = btn, values = focus


let initial, totalsec, perc, paused, mins, seconds, option, count=0, rst_savetime; // initialization 
/** Added a new event, when click on button "start" */
startBtn.addEventListener("click",()=>{
    let btn=localStorage.getItem("btn"); // we receive in "btn" a value in localstorage, which contains a value ("focus" on default)
    if (btn == "focus"){
        mins = +localStorage.getItem("focusTime"); // receive in mins a focusTime
    } else {
        if (count==+localStorage.getItem("longBreakInterval")) {
            mins = +localStorage.getItem("longBreakTime");
            count = 0;
        }
        else {
            mins = +localStorage.getItem("breakTime"); // receive in mins a breakTime
        }   
    }
    seconds = mins * 60; 
    totalsec = mins * 60;
    setTimeout(decremenT(), 60);
    startBtn.classList.add("btn_hiddden");
    pauseBtn.classList.add("btn_animation");
    resetBtn.classList.add("btn_animation");
    //startBtn.style.transform = "scale(0)"; // hide a button named "start"
    paused = false; // variable paused = false, cuz now timer is on
    option = localStorage.getItem("music");
    value = +localStorage.getItem("background_range");
    background_music(option,value); // select a background music
});
/** Function, which allow to show a picture with a live clock */
function decremenT(){
    mindiv.textContent = Math.floor(seconds/60); // calculate a minutes
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`; // calculate a seconds
    if (circle.classList.contains("danger")){
        circle.classList.remove("danger");
    }
    if (seconds > 0){
        perc = Math.ceil(((totalsec - seconds)/totalsec)*100); // how many percent is passed 
        setProgress(perc); 
        seconds--;
        initial = window.setTimeout(()=>decremenT(), 1000)
        if(seconds<10){
            circle.classList.add("danger") // add a class, which make progress bar pulsation 
        }
    } else {
        let pastmins = mins;
        mins = 0; 
        seconds = 0;
        background_music("stop");
        alarm_option = localStorage.getItem("alarm");
        alarm_value = localStorage.getItem("alarm_range");
        alarm_music(alarm_option, alarm_value);
        let btn = localStorage.getItem("btn"); // we receive in "btn" a value in localstorage, which contains a value ("focus" on default)
        if (btn == "focus"){
            sendNotification('Time is over!', {
                body: 'Congrats! You passed a focus time!',
                icon: 'media/pomodor.png',
                dir: 'auto'
            });
            ++count; 
            savedFocustime(pastmins);
            if (count==+localStorage.getItem("longBreakInterval")) {
                startBtn.textContent = "long break";
            }
            else {
                startBtn.textContent = "Break";
            } 
            startBtn.classList.add("break");
            localStorage.setItem("btn", "break");
        } else {
            sendNotification('Time to focus!', {
                body: 'Another focus time is waiting for you!',
                icon: 'media/pomodor.png',
                dir: 'auto'
            });
            startBtn.classList.remove("break");
            startBtn.textContent = "Start";
            localStorage.setItem("btn", "focus");
        }
        startBtn.classList.remove("btn_hiddden"); // show a button named "start"
        pauseBtn.classList.remove("btn_animation");
        resetBtn.classList.remove("btn_animation");
    }
}

function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
    alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }
    
    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
    // Если права есть, отправим уведомление
    let notification = new Notification(title, options);
    
    function clickFunc() { alert('Пользователь кликнул на уведомление'); }
    
    notification.onclick = clickFunc;
    }
    
    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
    // Если права успешно получены, отправляем уведомление
    if (permission === "granted") {
    let notification = new Notification(title, options);
    
    } else {
    alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
    }
    });
    };
}
