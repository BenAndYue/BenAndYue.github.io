// counting game time
let t = 0;
let time;
let j = 0;

let box, projectile, z = 0, dz = -0.1;


window.onload = function () {
    //hud
    time = document.getElementById("time")
    score = document.getElementById("score")


    //target and ball;
    target = document.getElementById("target")
    ball = document.getElementById("ballp")

    //voor + op de score

    loop()

}

function loop() {
    t++
    time.setAttribute("value", 'Tijd: ' + t)

    setTimeout(loop, 50)


   if(collision(target, ball)){
       console.log("DONE")
       ball.remove()

       j = 500
       score.setAttribute("value", j + " punten" )

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

    //radius
    // console.log(distance)\
console.log(distance)
    return distance < 0.95;



}



