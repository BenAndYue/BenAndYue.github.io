//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AFRAME.registerComponent('3a', {
    init: function () {
        let current = document.querySelectorAll(".scene3");
        let next = document.querySelectorAll(".scene3a");
        let sphereloader = () => {
            console.log("3a")

            //TODO video
            sky.setAttribute("src", "#scene3a");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()


                document.querySelector('#scene3a').play();


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

AFRAME.registerComponent('3aq', {
    init: function () {
        let current = document.querySelectorAll(".scene3a");
        let next = document.querySelectorAll(".scene3aq");
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

AFRAME.registerComponent('3aqn', {
    init: function () {
        let current = document.querySelectorAll(".scene3aq");
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

//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
AFRAME.registerComponent('3b', {
    init: function () {
        let current = document.querySelectorAll(".scene3");
        let next = document.querySelectorAll(".scene3b");
        let sphereloader = () => {
            console.log("3b")

            //TODO video
            sky.setAttribute("src", "#scene3b");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()

                document.querySelector('#scene3b').play();


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

AFRAME.registerComponent('3bq', {
    init: function () {
        let current = document.querySelectorAll(".scene3b");
        let next = document.querySelectorAll(".scene3bq");
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

AFRAME.registerComponent('3bqn', {
    init: function () {
        let current = document.querySelectorAll(".scene3bqn");
        let next = document.querySelectorAll(".scene4");
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
AFRAME.registerComponent('3c', {
    init: function () {
        let current = document.querySelectorAll(".scene3");
        let next = document.querySelectorAll(".scene3c");
        let sphereloader = () => {
            console.log("3c")

            //TODO video
            sky.setAttribute("src", "#scene3c");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()


                document.querySelector('#scene3c').play();


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

AFRAME.registerComponent('3cq', {
    init: function () {
        let current = document.querySelectorAll(".scene3c");
        let next = document.querySelectorAll(".scene3cq");
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

AFRAME.registerComponent('3cqn', {
    init: function () {
        let current = document.querySelectorAll(".scene3cq");
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
