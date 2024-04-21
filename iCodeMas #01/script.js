function timer() {
    let future = Date.parse("dec 25, 2023 00:00:00");
    let now = new Date();
    let diff = future - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    let d = days;
    let h = hours - days * 24;
    let m = mins - hours * 60;
    let s = secs - mins * 60;

    
    document.getElementById("day").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hour").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minute").innerText = m < 10 ? "0" + m : m;
    document.getElementById("second").innerText = s < 10 ? "0" + s : s;
}

setInterval(timer, 1000);