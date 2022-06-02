window.onload = function(){
function countDown(){
    var today = new Date(); // gets time from the device

    var  eventdate = new Date ("July  26,2022 00:00:00"); //this is the day i want the count down to  end

    var currenttime = today.getTime();

    var eventtime = eventdate.getTime();

    var  Timeleft = eventtime - currenttime; // subtracts the  event time  from  the current  time  to get  the  amount of time left

    var  sec = Math.floor(Timeleft/1000);
    var min = Math.floor(sec/60);
    var hrs = Math.floor(min/60);
    var  days = Math.floor(hrs/24);
    var months = Math.floor(days/30);


    months =days % 30;
    hrs =hrs % 24;
    min%=60;
    sec%=60;


    months = (months<10) ? "0" +months : months;  // when the  value of the timer gets below 10, so it doesnt show single values, this operation adds 0 in front of the number so instead of 9 we get 09
    days = (days<10) ? "0" +days : days;
    hrs = (hrs<10) ? "0" +hrs : hrs;
    min = (min<10) ? "0" +min : min;
    sec = (sec<10) ? "0" +sec : sec;



    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    setTimeout(countDown, 1000); // after every 1 sec  it goes into finite loop, this is what allows it to count

}
countDown();
}
