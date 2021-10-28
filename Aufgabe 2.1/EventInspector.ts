// Gruppenarbeit mit Debbie, Lisa und Asya
namespace EventExercise {
    window.addEventListener("load", handleLoad);

    let mousex: number;
    let mousey: number;


    //1. Funktion erstellen
    function handleLoad(_event: Event): void {

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
    function setInfoBox(_event: MouseEvent): void {
        mousex = _event.x;
        mousey = _event.y;

        document.getElementById("span").innerHTML = "Position X = " + mousex + ", Position Y = " + mousey;

        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
    }

    //dritte Funktion erstellen
    function logInfo(_event: Event): void {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
}

    // Leider zeigt mir mein Span keine Info an und ich hab es nicht geschaft herauszufinden warum :(
