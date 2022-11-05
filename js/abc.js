AFRAME.registerComponent('backhome', {


    init: function () {

        let homeworldelements = document.querySelectorAll(".homeworld");
        let sky = document.querySelector("#sky");

        let gobackhome = () => {
            sky.setAttribute("src", "#starsky");
            homeworldelements.forEach((homeworldelement) => {
                homeworldelement.setAttribute("visible", true)
            })
        }

        this.el.addEventListener('click', gobackhome);

    }
});


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
            // document.getElementById('intro').setAttribute('visible', 'true')

        }

        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('tostart', {

    init: function () {

        let current = document.querySelectorAll(".intro");
        let next = document.querySelectorAll(".start");


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

AFRAME.registerComponent('to1', {

    init: function () {

        let current = document.querySelectorAll(".start");
        let next = document.querySelectorAll(".scene1");
        let sphereloader = () => {
            console.log("start")
            sky.setAttribute("src", "#test360");

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



