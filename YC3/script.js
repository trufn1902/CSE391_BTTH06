function changeStyle(text) {
    text.classList.add("zoomIn")
    let changeColor = setInterval(() => {
        text.classList.toggle("changeColor")
    }, 200)
    setTimeout(() => {
        text.classList.remove("changeColor", "zoomIn")
        clearInterval(changeColor)
    }, 5000)
}

setInterval(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const colons = document.querySelectorAll(".colon")

    colons.forEach((colon) => {
        colon.src = "BTTH_icons/haicham.gif"
    });

    const h1 = document.querySelector(".h1")
    const h2 = document.querySelector(".h2")

    h1.src = `BTTH_icons/0${Math.floor(hours / 10)}.gif`
    h2.src = `BTTH_icons/0${hours % 10}.gif`

    const m1 = document.querySelector(".m1")
    const m2 = document.querySelector(".m2")

    m1.src = `BTTH_icons/0${Math.floor(minutes / 10)}.gif`
    m2.src = `BTTH_icons/0${minutes % 10}.gif`

    const s1 = document.querySelector(".s1")
    const s2 = document.querySelector(".s2")

    s1.src = `BTTH_icons/0${Math.floor(seconds / 10)}.gif`
    s2.src = `BTTH_icons/0${seconds % 10}.gif`

    const text = document.getElementsByTagName("p")

    if (hours < 12) {
        text[0].innerHTML = "Chào buổi sáng"
    } else if (hours < 17) {
        text[0].innerHTML = "Chào buổi chiều"
    } else {
        text[0].innerHTML = "Chào buổi tối"
    }
    if (
        (hours == 12 || hours == 17 || hours == 0) &&
        minutes == 00 &&
        seconds == 00
    ) {
        changeStyle(text[0])
    }
}, 1000)