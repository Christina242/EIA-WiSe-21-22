var EventExercise;
(function (EventExercise) {
    window.addEventListener("load", handleLoad);
    var mousex;
    var mousey;
    //1. Funktion erstellen
    function handleLoad(_event) {
        document.addEventListener("mouseMove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyUp", logInfo);
        //Install Listener auf body 
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyUp", logInfo);
        //Install Listener auf Id
        document.getElementById("div0").addEventListener("keyUp", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("keyUp", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
    }
    // zweite Funktion erstellen, Kooordinaten der
    function setInfoBox(_event) {
        mousex = _event.x;
        mousey = _event.y;
        document.getElementById("span").innerHTML = "Position X = " + mousex + ", Position Y = " + mousey;
        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
    }
    //dritte Funktion erstellen
    function logInfo(_event) {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
})(EventExercise || (EventExercise = {}));
// Leider zeigt mir mein Span keine Info an und ich hab es nicht geschaft herauszufinden warum :(
//# sourceMappingURL=EventInspector.js.map