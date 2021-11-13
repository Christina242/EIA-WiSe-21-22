"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subjects = ["Percy", "Captain Jessie", "Mr Bean", "Der hackfleischhassende Zerhacker", "Abahatschi"];
    let predicates = ["zerhackstückelt", "popelt", "trainiert", "penetriert", "spendet"];
    let objects = ["bis Blut kommt.", "in der Krossen Krabbe.", "das Fleisch.", "mit heruntergelassener Hose.", "vorm Penny auf der Reeperbahn."];
    //console.log(subjects, predicates, objects);
    //For-Schleife
    for (let index = subjects.length; index <= 0; index--) {
        let sentences = getVerse(subjects, predicates, objects);
        console.log(sentences);
    }
    //Function
    function getVerse(_subjects, _predicates, _objects) {
        let verse = "";
        let outcomeSubjects = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(outcomeSubjects, 1) + " ";
        let outcomePredicates = Math.floor(Math.random() * _predicates.length);
        verse += _predicates.splice(outcomePredicates, 1) + " ";
        let outcomeObjects = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(outcomeObjects, 1) + " ";
        return verse;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=RandomPoem.js.map