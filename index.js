// update in real time

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let time = `${hour}:${minute}`;
    let main = document.querySelector("#main");
    let sub = document.querySelector("#sub");
    let title = document.querySelector("#title");

    main.innerHTML = `${time}`;

    if (hour > 6 && hour < 12) {
        sub.innerHTML = "Good Morning, Sohan";
    }
    if (hour > 11 && hour < 15) {
        sub.innerHTML = "Good Afternoon, Sohan";
    }
    if (hour > 15 && hour < 24) {
        sub.innerHTML = "Good Evening, Sohan";
    }
    title.innerHTML = "Home";
}

setInterval(updateClock, 1000);