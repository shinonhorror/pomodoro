const select_background = document.getElementById("select")
const forest = document.querySelector(".forest");
const rain = document.querySelector(".rain");
const select_alarm = document.getElementById("select_alarm");
const win = document.querySelector(".win");
const bell = document.querySelector(".bells");
const alarm = document.querySelector(".alarm");
const gachi = document.querySelector(".gachi");
const anime = document.querySelector(".anime");
const background_range = document.getElementById("background_range");
const alarm_range = document.getElementById("alarm_range");

forest.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);

rain.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);

function background_music(option,value){
    if(option == 0){
        return;
    } else {
        if (option == 1) {
            forest.currentTime = 0;
            forest.volume = value/100;
            forest.play();
        }
        if (option == 2) {
            rain.currentTime = 0;
            rain.volume = value/100;
            rain.play();
        }
        if (option == "stop") {
            forest.pause();
            rain.pause();
        }
    }
}
function alarm_music(option, alarm_value){
    if(option == 0){
        return;
    } else {
        if (option == 1) {
            bell.currentTime = 0;
            bell.volume = alarm_value/100;
            bell.play();
        }
        if (option == 2) {
            alarm.currentTime = 0;
            bell.volume = alarm_value/100;
            alarm.play();
        }
        if (option == 3) {
            win.currentTime = 0;
            bell.volume = alarm_value/100;
            win.play();
        }
        if (option == 4) {
            anime.currentTime = 0;
            bell.volume = alarm_value/100;
            anime.play();
        }
        if (option == 5) {
            gachi.currentTime = 0;
            gachi.volume = alarm_value/100;
            gachi.play();
        }
    }
}
select_alarm.addEventListener("click", function (){
    if(select_alarm.selectedIndex == 0) {
        pause_all();
        return;
    }
    else if(select_alarm.selectedIndex == 1) {
        pause_all();
        bell.play();
        bell.volume = alarm_value/100;
        setTimeout(function(){bell.pause()}, 5000);
    }
    else if(select_alarm.selectedIndex == 2) {
        pause_all();
        alarm.play();
        alarm.volume = alarm_value/100;
        setTimeout(function(){alarm.pause()}, 5000);
    }
    else if(select_alarm.selectedIndex == 3) {
        pause_all();
        win.play();
        win.volume = alarm_value/100;
        setTimeout(function(){win.pause()}, 5000);
    }
    else if(select_alarm.selectedIndex == 4) {
        pause_all();
        anime.play();
        anime.volume = alarm_value/100;
        setTimeout(function(){anime.pause();}, 5000);
    }
    else {
        pause_all();
        gachi.play();
        gachi.volume = alarm_value/100;
        setTimeout(function(){gachi.pause();}, 5000);
    }
})

select_background.addEventListener("click", function (){
    if(select_background.selectedIndex == 0) {
        forest.pause();
        rain.pause();
        return;
    }
    else if(select_background.selectedIndex == 1) {
        rain.pause();
        forest.volume = background_range.value/100;
        forest.play();   
        setTimeout(function(){forest.pause()}, 2000);
    }
    else {
        forest.pause();
        rain.volume = background_range.value/100;
        rain.play();
        setTimeout(function(){rain.pause()}, 2000);
    }
})

function pause_all(){
    rain.pause();
    forest.pause();
    gachi.pause();
    anime.pause();
    win.pause();
    alarm.pause();
    bell.pause();
}