

function goed() {
    document.getElementById('goedInput').setAttribute('visible', 'true')

}

function fout() {
    document.getElementById('foutInput').setAttribute('visible', 'true')

}

// scene switch

//switching between scenes.
function setScene1() {
    document.getElementById('scene1').setAttribute('visible', 'true')
    document.getElementById('sceneFarm').setAttribute('visible', 'false')
    document.getElementById('sceneStore').setAttribute('visible', 'false')
    document.getElementById('sceneMeeting').setAttribute('visible', 'false')
    document.getElementById('sceneHome').setAttribute('visible', 'false')
    document.getElementById('foutInput').setAttribute('visible', 'false')
    document.getElementById('goedInput').setAttribute('visible', 'false')


}

function setSceneFarm() {
    document.getElementById('scene1').setAttribute('visible', 'false')
    document.getElementById('intro').setAttribute('visible', 'true')
}

function setSceneStore() {
    document.getElementById('scene1').setAttribute('visible', 'false')
    document.getElementById('sceneStore').setAttribute('visible', 'true')
}

function setSceneMeeting() {
    document.getElementById('scene1').setAttribute('visible', 'false')
    document.getElementById('sceneMeeting').setAttribute('visible', 'true')
}

function setSceneHome() {
    document.getElementById('scene1').setAttribute('visible', 'false')
    document.getElementById('sceneHome').setAttribute('visible', 'true')
}

