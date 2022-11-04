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



