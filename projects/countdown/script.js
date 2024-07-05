const enddate = "5 july 2024 08:20:00 PM";
document.getElementById("enddate").innerHTML = enddate;
const inputs = document.querySelectorAll("input");


function countDown() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000; // converted miliseconds to seconds 
    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
// initial call
countDown()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        countDown()
    },
    1000
)
