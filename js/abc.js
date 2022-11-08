let punten = 0;

//naar text
AFRAME.registerComponent('sphereexpand', {

    init: function () {

        let homeworldelements = document.querySelectorAll(".homeworld");
        let introelements = document.querySelectorAll(".intro");

        let sky = document.querySelector("#sky");

        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");

            homeworldelements.forEach((homeworldelement) => {
                homeworldelement.setAttribute("visible", false)
            })
            loadingInintro()
        }

        let loadingInintro = () => {
            introelements.forEach((introelement) => {
                introelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});
// naar intro
AFRAME.registerComponent('tostart', {
    init: function () {
        let current = document.querySelectorAll(".intro");
        let next = document.querySelectorAll(".start");
        let sphereloader = () => {
            sky.setAttribute("src", "#opening");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            loadingInintro()

            window.addEventListener('click', function () {
                document.querySelector('#opening').play();
            });
        }
        // let element = document.getElementById('pac');
        // element.remove();
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }

        this.el.addEventListener('click', sphereloader);
    }
});

//naar vraag1
AFRAME.registerComponent('to1', {
    init: function () {
        let current = document.querySelectorAll(".start");
        let next = document.querySelectorAll(".scene11");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
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
                document.querySelector("#cameraWrapper").object3D.position.set(1, 1, 1);

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


AFRAME.registerComponent('playvid', {

    init: function () {
        let sphereloader = () => {
            window.addEventListener('click', function () {
                document.querySelector('#test360').play();


            });

        }
        this.el.addEventListener('click', sphereloader);
    }
});


AFRAME.registerComponent('twoCorrectAfterScene', {
    init: function () {
        let current = document.querySelectorAll(".scene11");
        let next = document.querySelectorAll(".scene1b");
        let sphereloader = () => {
            //TODO
            current.forEach((currentelement) => {
                // currentelement.setAttribute("visible", false);
                var secondCameraEl = document.getElementById("third-camera");
                console.log(secondCameraEl)
                secondCameraEl.setAttribute('camera', 'active', true);
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

AFRAME.registerComponent('tot', {
    init: function () {

        let sphereloader = () => {


            const camera = document.querySelector("#cameraWrapper")
            camera.setAttribute('position', '10 10 10')

            // loadingInintro()
        }


        this.el.addEventListener('click', sphereloader);
    }
});
