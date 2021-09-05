const select_background = document.getElementById("select")
const forest = document.querySelector(".forest");
const rain = document.querySelector(".rain");
const select_alarm = document.getElementById("select_alarm");
const win = document.querySelector(".win");
const bell = document.querySelector(".bells");
const alarm = document.querySelector(".alarm");

forest.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);

rain.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);

function background_music(option){
    if(option == 0){
        return;
    } else {
        if (option == 1) {
            forest.currentTime = 0;
            forest.play();
        }
        if (option == 2) {
            rain.currentTime = 0;
            rain.play();
        }
        if (option == "stop") {
            forest.pause();
            rain.pause();
        }
    }
}
function alarm_music(option){
    if(option == 0){
        return;
    } else {
        if (option == 1) {
            bell.currentTime = 0;
            bell.play();
        }
        if (option == 2) {
            alarm.currentTime = 0;
            alarm.play();
        }
        if (option == 3) {
            win.currentTime = 0;
            win.play();
        }
    }
}
select_background.addEventListener("click", function (){
    if(select_background.selectedIndex == 0) {
        forest.pause();
        rain.pause();
        return;
    }
    else if(select_background.selectedIndex == 1) {
        rain.pause()
        forest.play();
        setTimeout(function(){forest.pause()}, 5000);
    }
    else {
        forest.pause()
        rain.play();
        setTimeout(function(){rain.pause()}, 5000);
    }
})
