var clicks = 0;
function clickME() {
    clicks += 1;
    
    //document.getElementById("clicks").innerHTML = clicks;
    $(".monster").toggleClass('blue-monster');
    if (clicks >= 60){
        
        alert('\
            **************************************\n\n\
                Congratulations\n\n\
                You have defeated the Monster!\n\n\
            **************************************');
        window.location.replace('win.html');
        clicks = 0;
    //document.getElementById("clicks").innerHTML = clicks;
        
    }
}
//hi

