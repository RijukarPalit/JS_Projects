const endDate = "23 March 2023 10:00 AM"

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now)
    const diff = (end - now)/1000;
    // console.log(diff);
    if(diff < 0) return;
    //covert into days
    inputs[0].value = Math.floor(diff/3600/24);
    //covert into hours
    inputs[1].value = Math.floor(diff/3600) % 24;
    //covert into minutes
    inputs[2].value = Math.floor(diff/60) % 60;
    //covert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}
//initial call
clock();

/**
 * 1 day = 24hrs
 * 1 hr = 60min
 * 60 min = 3600sec
 *  
 */

setInterval(
    () => {
        clock()
    },
    1000
)