// counting game time

let j = 0;
let box, projectile, z = 0, dz = -0.1;
let points = 0;


window.onload = function () {

    score = document.getElementById("score")

    //target and ball;
    target = document.getElementById("target")
    ball = document.getElementById("ballp")
    ball2 = document.getElementById("ballp2")
    ball3 = document.getElementById("ballp3")


    //targets
    target100 = document.getEslementById("target100")
    target200 = document.getElementById("target200")
    target300 = document.getElementById("target300")
    target500 = document.getElementById("target500")
    target1001 = document.getElementById("target1001")
    target1002 = document.getElementById("target1002")

    //floor
    floor = document.getElementById("floor")
    check = true;
    if (check) {
        points = localStorage.getItem(points)
        check = false
    }
    loop()
}

function loop() {
    setTimeout(loop, 100)

    //100 punten
    if (collision(target100, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 100 + " punten")
    }
    if (collision(target100, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 100 + " punten")
    }
    if (collision(target100, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 100 + " punten")
    }

    //200 punten
    if (collision2(target200, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 200 + " punten")
    }
    if (collision2(target200, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 200 + " punten")
    }
    if (collision2(target200, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 200 + " punten")
    }
    //300
    if (collision2(target300, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 300 + " punten")
    }
    if (collision2(target300, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 300 + " punten")
    }
    if (collision2(target300, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 300 + " punten")
    }
    //500
    if (collision2(target500, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 500 + " punten")
    }
    if (collision2(target500, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 500 + " punten")
    }
    if (collision2(target500, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 500 + " punten")
    }
    //1000
    if (collision2(target1001, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }
    if (collision2(target1001, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }
    if (collision2(target1001, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }

    if (collision2(target1002, ball)) {
        console.log("DONE")
        ball.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }
    if (collision2(target1002, ball2)) {
        console.log("DONE")
        ball2.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }
    if (collision2(target1002, ball3)) {
        console.log("DONE")
        ball3.remove()
        score.setAttribute("value", points + 1000 + " punten")
    }



}


//method to check if target hits x
//obj1 = target, 2 = ball
function collision(obj1, obj2) {

    let x1 = obj1.object3D.position.x;
    let z1 = obj1.object3D.position.z;
    let y1 = obj1.object3D.position.y;
    let x2 = obj2.object3D.position.x;
    let z2 = obj2.object3D.position.z;
    let y2 = obj2.object3D.position.y;

    const distance = Math.sqrt(
        (x1 - x2) * (x1 - x2) +
        (y1 - y2) * (y1 - y2) +
        (z1 - z2) * (z1 - z2)
    );
    return distance < 1.28;
}


function collision2(obj1, obj2) {


    let x1 = obj1.object3D.position.x;
    let z1 = obj1.object3D.position.z;
    let y1 = obj1.object3D.position.y;

    let x2 = obj2.object3D.position.x;
    let z2 = obj2.object3D.position.z;
    let y2 = obj2.object3D.position.y;


    const distance = Math.sqrt(
        (x1 - x2) * (x1 - x2) +
        (y1 - y2) * (y1 - y2) +
        (z1 - z2) * (z1 - z2)
    );
    //radius

    return distance < 0.7;
}






