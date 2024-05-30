function clockDisplay(){
    let current =  new Date();
    let hour = ((current.getHours() < 10? "0" : "") + current.getHours());
    let minute = ((current.getMinutes() < 10? "0" : "") + current.getMinutes());
    let second = ((current.getSeconds() < 10? "0" : "") + current.getSeconds());
    $(".hours").text(hour);
    $(".minutes").text(minute);
    $(".seconds").text(second);
}
setInterval(clockDisplay, 1000);