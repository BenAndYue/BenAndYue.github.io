//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AFRAME.registerComponent('2a', {
    init: function () {
        let current = document.querySelectorAll(".scene2");
        let next = document.querySelectorAll(".scene2a");
        let sphereloader = () => {
            console.log("2a")

            //TODO video
            sky.setAttribute("src", "#scene2a");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()


            document.querySelector('#scene2a').play();


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

AFRAME.registerComponent('2aq', {
    init: function () {
        let current = document.querySelectorAll(".scene2a");
        let next = document.querySelectorAll(".scene2aq");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })

            loadingInintro();
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('2aqn', {
    init: function () {
        let current = document.querySelectorAll(".scene2aq");
        let next = document.querySelectorAll(".scene2");
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

//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
AFRAME.registerComponent('2b', {
    init: function () {
        let current = document.querySelectorAll(".scene2");
        let next = document.querySelectorAll(".scene2b");
        let sphereloader = () => {
            console.log("2b")

            //TODO video
            sky.setAttribute("src", "#scene2b");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()


            //TODO video
            document.querySelector('#scene2b').play();


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

AFRAME.registerComponent('2bq', {
    init: function () {
        let current = document.querySelectorAll(".scene2b");
        let next = document.querySelectorAll(".scene2bq");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })

            loadingInintro();
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('2bqn', {
    init: function () {
        let current = document.querySelectorAll(".scene2bq");
        let next = document.querySelectorAll(".scene2");
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

//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
AFRAME.registerComponent('2c', {
    init: function () {
        let current = document.querySelectorAll(".scene2");
        let next = document.querySelectorAll(".scene2c");
        let sphereloader = () => {
            console.log("2c")

            //TODO video
            sky.setAttribute("src", "#scene2c");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()


            //TODO video
            document.querySelector('#scene2c').play();


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

AFRAME.registerComponent('2cq', {
    init: function () {
        let current = document.querySelectorAll(".scene2c");
        let next = document.querySelectorAll(".scene2cq");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })

            loadingInintro();
        }
        let loadingInintro = () => {
            next.forEach((nextelement) => {
                nextelement.setAttribute('visible', true)
            })
        }
        this.el.addEventListener('click', sphereloader);
    }
});

AFRAME.registerComponent('2cqn', {
    init: function () {
        let current = document.querySelectorAll(".scene2cq");
        let next = document.querySelectorAll(".scene3");
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








