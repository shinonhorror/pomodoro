const circle = document.querySelector(".progress-ring_circle"); // select a circle
const radius = circle.r.baseVal.value; // object cirlce has a property named r (radius), we get a value from this property
const circumference = radius*2*Math.PI; // valuclate circumference
circle.style.strokeDasharray = `${circumference} ${circumference}`;   // progress-bar is hidden
circle.style.strokeDashoffset = circumference;  

/* This function allow to use the animation of progress-bar for timer, 
inputs for this function - percenteges from timer (what percent of time)
*/ 
function setProgress(percent){
    const offset = circumference - percent / 100*circumference;
    circle.style.strokeDashoffset = offset; // now progress bar is show (depends of percent)
}