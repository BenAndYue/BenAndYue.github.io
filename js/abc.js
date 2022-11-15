let punten = 0;

//naar text
AFRAME.registerComponent('sphereexpand', {

    init: function () {

        let homeworldelements = document.querySelectorAll(".homeworld");
        let introelements = document.querySelectorAll(".intro");

        let sky = document.querySelector("#sky");

        let sphereloader = () => {
            console.log("test")
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
// naar opening
AFRAME.registerComponent('tostart', {
    init: function () {
        let current = document.querySelectorAll(".intro");
        let next = document.querySelectorAll(".opening");
        let sphereloader = () => {
            //TODO video opening1
            sky.setAttribute("src", "#opening");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            loadingInintro()


                document.querySelector('#opening').play();

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
// opening 1 to opening 2

AFRAME.registerComponent('toop2', {
    init: function () {
        let current = document.querySelectorAll(".opening");
        let next = document.querySelectorAll(".opening2");
        let sphereloader = () => {
            console.log("O 1->2")
            //TODO video
            sky.setAttribute("src", "#opening2");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })

            loadingInintro()

                document.querySelector('#opening2').play();



            let element = document.getElementById('sceneoop1');
            element.remove();
        }
        //removing current scene
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
        let current = document.querySelectorAll(".opening2");
        let next = document.querySelectorAll(".scene1");
        let sphereloader = () => {
            console.log("opening -> 1")
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




