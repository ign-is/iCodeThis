function timer() {
    let future = Date.parse("jun 12, 2025 01:30:00");
    console.log(future)
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

    
    document.querySelector(".day").innerText = d < 10 ? "0" + d : d;
    document.querySelector(".hour").innerText = h < 10 ? "0" + h : h;
    document.querySelector(".minute").innerText = m < 10 ? "0" + m : m;
    document.querySelector(".second").innerText = s < 10 ? "0" + s : s;
}
timer();

setInterval(timer, 1000);

