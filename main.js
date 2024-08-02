function getTime() {
    let today = new Date();
    let hour = today.getHours();
    let minit = today.getMinutes();
    let sec = today.getSeconds();


     hour = hour % 12;
     hour = hour ?  hour : 12 //??  not understand 🥲
     
    minit = checkTime(minit);
    sec = checkTime(sec);
    document.getElementById('showtime').innerHTML = hour + ":" + minit + ":" + sec;

    setTimeout(function() { getTime(); }, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

getTime();