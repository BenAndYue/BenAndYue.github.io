//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AFRAME.registerComponent('1a', {
    init: function () {
        let current = document.querySelectorAll(".scene1");
        let next = document.querySelectorAll(".scene1a");
        let sphereloader = () => {
            console.log("1a")

            //TODO video
            sky.setAttribute("src", "#scene1a");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            let element = document.getElementById('vraag1');
            element.remove();
            loadingInintro()

            window.addEventListener('click', function () {
                //TODO video
                document.querySelector('#scene1a').play();
            });

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

AFRAME.registerComponent('1aq', {
    init: function () {
        let current = document.querySelectorAll(".scene1a");
        let next = document.querySelectorAll(".scene1aq");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            let element = document.getElementById('1aq');
            element.remove();
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

AFRAME.registerComponent('1aqn', {
    init: function () {
        let current = document.querySelectorAll(".scene1aq");
        let next = document.querySelectorAll(".scene2");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            let element = document.getElementById('1aqn');
            //TODO remove the rest of b and c
            element.remove();
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
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
AFRAME.registerComponent('1b', {
    init: function () {
        let current = document.querySelectorAll(".scene1");
        let next = document.querySelectorAll(".scene1b");
        let sphereloader = () => {
            console.log("1b")

            //TODO video
            sky.setAttribute("src", "#scene1b");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()

            window.addEventListener('click', function () {
                //TODO video
                document.querySelector('#scene1b').play();
            });

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

AFRAME.registerComponent('1bq', {
    init: function () {
        let current = document.querySelectorAll(".scene1b");
        let next = document.querySelectorAll(".scene1bq");
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

AFRAME.registerComponent('1bqn', {
    init: function () {
        let current = document.querySelectorAll(".scene1bq");
        let next = document.querySelectorAll(".scene1");
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
AFRAME.registerComponent('1c', {
    init: function () {
        let current = document.querySelectorAll(".scene1");
        let next = document.querySelectorAll(".scene1c");
        let sphereloader = () => {
            console.log("1c")

            //TODO video
            sky.setAttribute("src", "#scene1c");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('vraag1');
            // element.remove();
            loadingInintro()

            window.addEventListener('click', function () {
                //TODO video
                document.querySelector('#scene2c').play();
            });

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

AFRAME.registerComponent('1cq', {
    init: function () {
        let current = document.querySelectorAll(".scene1c");
        let next = document.querySelectorAll(".scene1cq");
        let sphereloader = () => {
            sky.setAttribute("src", "#bordeauxtheater");
            current.forEach((currentelement) => {
                currentelement.setAttribute("visible", false)
            })
            // let element = document.getElementById('1cq');
            // element.remove();
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

AFRAME.registerComponent('1cqn', {
    init: function () {
        let current = document.querySelectorAll(".scene1cq");
        let next = document.querySelectorAll(".scene1");
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

