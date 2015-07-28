var clicks = 0;
function clickME() {
    clicks += 1;
    $(".monster").toggleClass('blue-monster');
    if (clicks >= 5){
        alert('buts');
        clicks = 0;
    }
    document.getElementById("clicks").innerHTML = clicks;
}
//hi

