//sla op in cookies
//half erbij na goed zijn.
//TODO check if cookies is already used otherwise add points.
//TODO go back methode naar scene 1 to1
// Vraag naar scene
AFRAME.registerComponent('1a', {
    init: function () {
        let current = document.querySelectorAll(".scene11");
        let next = document.querySelectorAll(".scene1a");
        let sphereloader = () => {
            //set vraag 1a
            sky.setAttribute("src", "#scen1a");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            loadingInintro()
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('1b', {
    init: function () {
        let current = document.querySelectorAll(".scene11");
        let next = document.querySelectorAll(".scene1b");
        let sphereloader = () => {
            //set vraag 1a
            sky.setAttribute("src", "#scene1b");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            loadingInintro()
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('1c', {
    init: function () {
        let current = document.querySelectorAll(".scene11");
        let next = document.querySelectorAll(".scene1c");
        let sphereloader = () => {
            //set vraag 1a
            // sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                // currentelement.setAttribute("visible", false);
                var secondCameraEl = document.getElementById("second-camera");
                console.log(secondCameraEl)
                secondCameraEl.setAttribute('camera', 'active', true);
            })


            // loadingInintro()
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});
//TODO scene naar board

//TODO board naar scene 2